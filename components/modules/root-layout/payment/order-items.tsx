interface OrderItemProps {
  item: {
    id: string;
    name: string;
    variant: string;
    quantity: number;
    price: number;
    image: string;
    Product: {
      title: string;
      images: string[];
    };
  };
}

export function OrderItem({ item }: OrderItemProps) {
  return (
    <div className="flex gap-4 pb-4 border-b border-gray-200 dark:border-muted last:border-b-0 last:pb-0">
      <img
        src={item.Product?.images[0]}
        alt={item.Product?.title}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h4 className=" mb-1">{item.Product?.title}</h4>
        <p className="text-muted-foreground">Quantity: {item.quantity}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="">${(item.price * item.quantity).toFixed(2)}</p>
        {item.quantity > 1 && (
          <p className="text-muted-foreground">${item.price.toFixed(2)} each</p>
        )}
      </div>
    </div>
  );
}
