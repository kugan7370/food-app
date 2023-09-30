import { featuredProducts } from "@/data";
import { ProductType } from "@/types/types";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/product?cat=${category}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

type Props = {
  params: { Category: string };
};

const category = async ({ params }: Props) => {
  const catProducts: ProductType[] = await getData(params.Category);

  return (
    <div className="flex flex-wrap">
      {catProducts &&
        catProducts.map((item) => (
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className=" relative group w-screen lg:w-1/3 md:w-1/2 border-r-2 border-b-2 even:bg-fuchsia-50 border-red-600 h-[60vh]"
          >
            {/* innerContainer */}
            <div className="flex flex-col justify-between p-5 h-[100%] ">
              <div className="relative h-[90%] lg:h-[80%] md:[80%]">
                {item.img && (
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* detail container */}
              <div className="flex justify-between items-center">
                <h1 className="text-2xl text-red-500 font-semibold">
                  {item.title}
                </h1>
                <h1 className=" text-2xl text-red-500 font-semibold">
                  ${item.price}
                </h1>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-full h-full  bg-black bg-opacity-30  justify-center items-center z-10 hidden group-hover:flex">
              <button className="  bg-red-500 text-white px-3 py-1 rounded-md">
                Add to cart
              </button>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default category;
