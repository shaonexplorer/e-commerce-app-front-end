"use client";

import { CheckCircle, Package, Mail, Download, ArrowRight } from "lucide-react";
import { OrderItem } from "./order-items";
import { OrderSummary } from "./order-summary";
import { getOrderItems, getSingleOrder } from "@/actions/get-order-items";

import { format } from "date-fns";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface orderItems {
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
}

export function PaymentSuccess() {
  // const orderNumber = "ORD-2024-7891";
  // const orderDate = "December 7, 2024";
  const estimatedDelivery = format(new Date(), "PPpp");

  const [orderItem, setOrderItem] = useState<{ data: orderItems[] }>();
  const [order, setOrder] = useState<{
    data: { buyer: { email: string }; totalAmount: number };
  }>();

  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    async function getOrderInfo() {
      const items = await getOrderItems(orderId as string);
      const orderData = await getSingleOrder(orderId as string);

      setOrderItem(items);
      setOrder(orderData);
    }

    getOrderInfo();
  }, []);

  const email = order?.data.buyer?.email || "customer@example.com";

  const subtotal = order?.data?.totalAmount;
  const shipping = 9.99;
  const tax = (subtotal as number) * 0.08;
  const total = (subtotal as number) + shipping + tax;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 md:w-40 md:h-40 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-15 h-15 md:w-30 md:h-30 text-green-600" />
        </div>
        <h1 className="text-green-600 mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground">
          Thank you for your purchase. Your order has been confirmed.
        </p>
      </div>

      {/* Order Information Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-200 dark:border-muted">
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-muted-foreground mb-1">Order Number</p>
              <p className=" ">{orderId}</p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-200 dark:border-muted">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-500 mb-1">Confirmation Sent To</p>
              <p className="  break-all">{email}</p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-200 dark:border-muted">
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-500 mb-1">Estimated Delivery</p>
              <p className=" ">{estimatedDelivery}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="lg:col-span-2">
          <div className="bg-card min-h-[280px] rounded-lg shadow-sm border border-gray-200 dark:border-muted p-6">
            <h2 className="mb-6">Order Details</h2>
            <div className="space-y-4">
              {orderItem?.data.map((item: orderItems) => (
                <OrderItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-card rounded-lg shadow-sm border border-gray-200 dark:border-muted p-6 mt-6">
            <h3 className="mb-4">Shipping Address</h3>
            <div className="text-muted-foreground">
              <p>John Doe</p>
              <p>123 Main Street, Apt 4B</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1 flex flex-col">
          <OrderSummary
            subtotal={subtotal as number}
            shipping={shipping}
            tax={tax}
            total={total}
          />

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Track Order
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full bg-card text-muted-foreground py-3 px-4 rounded-lg border border-gray-300 dark:border-muted hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download Invoice
            </button>
            <Link href={"product"}>
              <button className="w-full bg-card text-muted-foreground py-3 px-4 rounded-lg border border-gray-300 dark:border-muted hover:bg-gray-50 transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 bg-card border border-blue-200 dark:border-muted rounded-lg p-6 text-center">
        <p className="text-muted-foreground">
          Need help with your order?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Contact Support
          </span>
        </p>
      </div>
    </div>
  );
}
