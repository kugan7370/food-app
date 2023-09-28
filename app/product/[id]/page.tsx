import Price from "@/Components/Options";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/product/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

const SingleProducts = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getData(params.id);

  return (
    <div className="w-screen ">
      {/* innerContainer */}
      {singleProduct && (
        <div className="h-[calc(100vh-110px)]  lg:flex-row lg:justify-center items-center  w-full flex flex-col justify-between gap-4">
          {/* imagecontainer */}
          <div className="relative  w-full h-1/2 md:h-[60%] mt-2">
            {singleProduct.img && (
              <Image
                src={singleProduct.img}
                alt=""
                fill
                className="object-contain"
              />
            )}
          </div>

          {/* detail container */}
          <div className="flex flex-col gap-4 text-red-500 px-10">
            <h1 className="text-xl font-bold">{singleProduct.title}</h1>
            <p className="text-sm">{singleProduct.desc}</p>
            <Price product={singleProduct} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProducts;
