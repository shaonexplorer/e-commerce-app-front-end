import { PaymentSuccess } from "@/components/modules/root-layout/payment/payment-success-page";
import { Suspense } from "react";

async function PaymentResultPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId: string }>;
}) {
  const { orderId } = await searchParams;
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PaymentSuccess orderId={orderId} />
    </Suspense>
  );
}

export default PaymentResultPage;
