"use client";

import CheckoutForm from "@/Components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { log } from "console";
import React, { useEffect } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
const Payment = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = React.useState("");
  const { id } = params;

  useEffect(() => {
    const fetchPayment = async () => {
      const res = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
        method: "POST",
      });

      const data = await res.json();

      setClientSecret(data.client_secret);
    };
    fetchPayment();
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
