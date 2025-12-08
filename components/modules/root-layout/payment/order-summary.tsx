interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export function OrderSummary({
  subtotal,
  shipping,
  tax,
  total,
}: OrderSummaryProps) {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-gray-200 dark:border-muted p-6 flex-1">
      <h3 className="mb-4">Order Summary</h3>
      <div className="space-y-3">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>${subtotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Shipping</span>
          <span>${shipping?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Tax</span>
          <span>${tax?.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-200 dark:border-muted pt-3 mt-3">
          <div className="flex justify-between  ">
            <span>Total</span>
            <span>${total?.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-muted">
        <div className="flex justify-between text-muted-foreground">
          <span>Payment Method</span>
          <span>•••• 4242</span>
        </div>
      </div>
    </div>
  );
}
