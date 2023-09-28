"use client";
import { useCartStore } from "@/utils/store";
import Link from "next/link";
import React, { useEffect } from "react";

const Cart = () => {
  const { totalItems } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  return (
    <div>
      <Link
        className="text-lg md:text-base text-red-800 font-bold"
        href="/cart"
      >
        {`Cart (${totalItems})`}
      </Link>
    </div>
  );
};

export default Cart;
