"use client";

import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import * as React from "react";

import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
} from "@/components/ui/autocomplete";
import { Spinner } from "@/components/ui/spinner";
import { GetPublicProducts } from "@/actions/get-products";
import { IProduct } from "../../home/offer-section/recommended-product/recommended";
import { useRouter } from "next/navigation";
import Image from "next/image";

// type Movie = { id: string; title: string; year: number };
// const top100Movies: Movie[] = [
//   { id: "1", title: "The Shawshank Redemption", year: 1994 },
//   { id: "2", title: "The Godfather", year: 1972 },
//   { id: "3", title: "The Dark Knight", year: 2008 },
//   { id: "4", title: "The Godfather Part II", year: 1974 },
//   { id: "5", title: "12 Angry Men", year: 1957 },
//   { id: "8", title: "Pulp Fiction", year: 1994 },
//   { id: "11", title: "Forrest Gump", year: 1994 },
//   { id: "14", title: "Inception", year: 2010 },
// ];

export default function AutoComplete() {
  const [productData, setProductData] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<IProduct[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const { contains } = AutocompletePrimitive.useFilter({ sensitivity: "base" });

  React.useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      const products = await GetPublicProducts();
      if (products && products?.data) {
        setProductData(products?.data);
      }
      setIsLoading(false);
    }

    getProducts();
  }, []);

  function searchProducts(
    query: string,
    filter: (item: string, query: string) => boolean
  ): IProduct[] {
    //   await new Promise((resolve) =>
    //     setTimeout(resolve, Math.random() * 500 + 100)
    //   );
    //   if (Math.random() < 0.01 || query === "will_error") {
    //     throw new Error("Network error");
    //   }

    return productData
      .filter((item: IProduct) => filter(item.title, query))
      .slice(0, 10);
  }

  React.useEffect(() => {
    if (!searchValue) {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    let ignore = false;

    const timeoutId = setTimeout(() => {
      try {
        const results = searchProducts(searchValue, contains);
        if (!ignore) setSearchResults(results);
      } catch {
        if (!ignore) {
          setError("Failed to fetch products. Please try again.");
          setSearchResults([]);
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      ignore = true;
    };
  }, [searchValue, contains]);

  let status: React.ReactNode = `${searchResults.length} result${
    searchResults.length === 1 ? "" : "s"
  } found`;
  if (isLoading) {
    status = (
      <span className="flex items-center justify-between gap-2 text-muted-foreground">
        Searching...
        <Spinner />
      </span>
    );
  } else if (error) {
    status = (
      <span className="font-normal text-destructive text-sm">{error}</span>
    );
  } else if (searchResults.length === 0 && searchValue) {
    status = (
      <span className="font-normal text-muted-foreground text-sm">
        product {searchValue} does not exist in the inventory
      </span>
    );
  }

  const shouldRenderPopup = searchValue !== "";

  const router = useRouter();

  const handleSubmit = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <Autocomplete
      filter={null}
      items={searchResults}
      itemToStringValue={(item: unknown) => (item as IProduct).title}
      onValueChange={setSearchValue}
      value={searchValue}
    >
      <AutocompleteInput
        placeholder="search products..."
        className={"max-w-[600px]"}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            router.push(`/product?searchTerm=${searchValue}`);
          }
        }}
      />
      {shouldRenderPopup && (
        <AutocompletePopup aria-busy={isLoading || undefined}>
          <AutocompleteStatus className="text-muted-foreground">
            {status}
          </AutocompleteStatus>
          <AutocompleteList>
            {(item: IProduct) => (
              <AutocompleteItem
                key={item.id}
                value={item.title}
                onClick={() => handleSubmit(item.id)}
              >
                <div className="flex w-full  items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="sm:font-medium">{item.title}</div>
                    <div className="text-muted-foreground text-xs sm:text-sm">
                      ${item.price}
                    </div>
                  </div>

                  <Image
                    src={item.images[0]}
                    width={50}
                    height={50}
                    alt="image"
                    className="rounded-[px]"
                  ></Image>
                  {/* <div className="text-muted-foreground text-xs">
                    {item.description}
                  </div> */}
                </div>
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      )}
    </Autocomplete>
  );
}
