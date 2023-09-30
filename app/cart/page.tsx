"use client";
import { singleProduct } from "@/data";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { removeFromCart, totalItems, totalPrice, products } = useCartStore();

  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  if (status === "unauthenticated") {
    router.push("/");
  }

  const handleSubmit = async () => {
    if (!session) {
      router.push("/");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/order", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            price: totalPrice.toFixed(2),
            products: products,
            status: "not paid",
            userEmail: session.user.email,
          }),
        });

        const data = await res.json();
        router.push(`/payment/${data.id}`);
      } catch (error) {}
    }
  };

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
                {product.price.toFixed(2)}
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
      <div className="flex flex-col gap-2 lg:w-3/4 lg:bg-gray-50 lg:justify-center  p-20">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-red-500">{`Subtotal (${totalItems} items)`}</h3>
          <h3 className="font-semibold text-red-500">
            {totalPrice.toFixed(2)}
          </h3>
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
          <h3 className="font-semibold text-red-500">
            {totalPrice.toFixed(2)}
          </h3>
        </div>
        {/* checkout button */}
        <button
          className="bg-red-500 text-white font-semibold  py-2 px-4 rounded-lg mt-5"
          onClick={handleSubmit}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
