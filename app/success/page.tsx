"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
  const router = useRouter();

  useEffect(() => {
    if (payment_intent) {
      const fetchPayment = async () => {
        const res = await fetch(
          `http://localhost:3000/api/confirm/${payment_intent}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        router.push("/order");
      };
      fetchPayment();
    }
  }, [payment_intent, router]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-110px)]">
      <h1 className="text-5xl font-bold">Payment successful!</h1>
      <p className="text-3xl font-bold">Thank you for your order!</p>
    </div>
  );
};

export default SuccessPage;
