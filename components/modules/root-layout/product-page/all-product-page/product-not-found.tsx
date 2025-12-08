import { SearchX, Package } from "lucide-react";

interface NoProductFoundProps {
  searchQuery?: string;
  onClearSearch?: () => void;
  onBrowseAll?: () => void;
}

export function NoProductFound({ searchQuery }: NoProductFoundProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px] lg:min-h-[600px] px-2 sm:px-4 py-12 col-span-2 sm:col-span-3 lg:col-span-4">
      <div className="text-center max-w-md mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Package
              className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground"
              strokeWidth={1.5}
            />
            <div className="absolute -bottom-2 -right-2 bg-card rounded-full p-1">
              <SearchX
                className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="mb-2 ">No Products Found</h2>
          {searchQuery ? (
            <p className="text-gray-600">
              We could not find any products matching{" "}
              <span className="font-medium  ">{searchQuery}</span>
            </p>
          ) : (
            <p className="text-muted-foreground">
              We could not find any products at the moment.
            </p>
          )}
        </div>

        {/* Suggestions */}
        <div className="mb-8 bg-card rounded-lg p-2 sm:p-6">
          <p className="  mb-3">Try the following:</p>
          <ul className="text-muted-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <span>Check your spelling or try different keywords</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <span>Use more general terms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <span>Browse our categories to discover products</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        {/* <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onClearSearch && searchQuery && (
            <button
              onClick={onClearSearch}
              className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
              Clear Search
            </button>
          )}
          {onBrowseAll && (
            <button
              onClick={onBrowseAll}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Browse All Products
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
}
