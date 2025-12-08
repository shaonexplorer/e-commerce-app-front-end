import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function EmptyCart() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col items-center justify-center min-h-[500px]">
        {/* Icon */}
        <div className="mb-6 bg-muted/80 rounded-full py-8 pl-6 pr-8">
          <ShoppingCart className="w-24 h-24 text-gray-400" strokeWidth={1.5} />
        </div>

        {/* Message */}
        <h2 className="mb-3 text-red-400 font-semibold text-xl">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground-600 mb-8 text-center max-w-md">
          Looks like you have not added anything to your cart yet. Start
          shopping to fill it up!
        </p>

        {/* CTA Button */}
        <Link
          href={"/product"}
          className="bg-foreground text-secondary  px-8 py-3 rounded-lg hover:bg-muted-foreground transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}

export default EmptyCart;
