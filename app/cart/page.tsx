"use client";
import { singleProduct } from "@/data";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { useEffect } from "react";

const Cart = () => {
  const { removeFromCart, totalItems, totalPrice, products } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row  gap-6 h-[calc(100vh-110px)]">
      {/* cartItemsContainer */}
      <div className="flex flex-col gap-5 h-3/4 lg:w-3/4 p-5 ">
        {/* cart items */}
        {products &&
          products.map((product) => (
            <div key={product.id} className="flex gap-6 items-center">
              <div className="ImageContainer relative w-20 lg:w-32 h-20 lg:h-32">
                {product.img && (
                  <Image
                    src={product.img}
                    alt=""
                    fill
                    className="object-contain "
                  />
                )}
              </div>

              <div className="w-[30%]">
                <h1 className="text-base font-bold text-red-500">
                  {product.title}
                </h1>
                <p className="text-sm text-red-500">{product.optionTitle}</p>
              </div>

              <h2 className="text-lg font-bold text-red-500 ">
                {`X ${product.quantity}`}
              </h2>

              <h2 className="text-lg font-bold text-red-500 ml-auto">
                {product.price}
              </h2>
              <button
                className="cursor-pointer text-red-500"
                onClick={() => removeFromCart(product)}
              >
                <Image src="/delete.png" alt="" height={30} width={30} />
              </button>
            </div>
          ))}
      </div>

      {/* checkOut */}
      <div className="flex flex-col gap-2 lg:w-3/4 lg:bg-gray-50 lg:justify-center p-10">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-red-500">{`Subtotal (${totalItems} items)`}</h3>
          <h3 className="font-semibold text-red-500">{totalPrice}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-red-500">Service Cost</h3>
          <h3 className="font-semibold text-red-500">$0.00</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-red-500">Delivery Cost</h3>
          <h3 className="font-semibold text-green-500">Free</h3>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="font-semibold text-red-500 uppercase">
            Total(incl vat)
          </h3>
          <h3 className="font-semibold text-red-500">{totalPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
