import { GetAllProducts } from "@/actions/get-products";
import { CardProduct } from "../../dashboard/seller/product/card/product-card";

async function ProductList() {
  const productData = await GetAllProducts(); //await GetAllProducts();

  // console.log("Product Data:", productData);

  return (
    <div className="pt-10 grid grid-cols-2 sm:grid-cols-5 gap-5 ">
      {/* {productData.data &&
        productData.data.length > 0 &&
        productData.data.map(
          (product: {
            id: string;
            images: string[];
            title: string;
            price: string;
            quantity: number;
          }) => <CardProduct productData={product} key={product.id} />
        )} */}
    </div>
  );
}

export default ProductList;
