import { getOrderItems, getSingleOrder } from "@/actions/get-order-items";
import Loading from "@/app/loading";
import { PaymentSuccess } from "@/components/modules/root-layout/payment/payment-success-page";
import { Suspense } from "react";

async function PaymentResultPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId: string }>;
}) {
  const { orderId } = await searchParams;
  const items = await getOrderItems(orderId as string);
  const orderData = await getSingleOrder(orderId as string);

  return (
    <Suspense fallback={<Loading />}>
      <PaymentSuccess order={orderData} orderItem={items} />
    </Suspense>
  );
}

export default PaymentResultPage;
