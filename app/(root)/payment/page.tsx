import { PaymentSuccess } from "@/components/modules/root-layout/payment/payment-success-page";

async function PaymentResultPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId: string }>;
}) {
  const { orderId } = await searchParams;
  return (
    <div>
      <PaymentSuccess orderId={orderId} />
    </div>
  );
}

export default PaymentResultPage;
