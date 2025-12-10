import { PaymentSuccess } from "@/components/modules/root-layout/payment/payment-success-page";
import { Suspense } from "react";

async function PaymentResultPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PaymentSuccess />
    </Suspense>
  );
}

export default PaymentResultPage;
