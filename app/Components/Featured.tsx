import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {

    return (
        <div className='flex w-screen overflow-x-scroll '>
            <div className="w-max flex">
                {featuredProducts && featuredProducts.map((item) => (
                    <div key={item.id} className=" w-screen cursor-pointer items-center flex flex-col gap-4 p-4 hover:bg-fuchsia-50 transition-all duration-300 justify-around h-[90vh]  md:w-[50vw]  xl:w-[33vw]">
                        {/* image container */}
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                <Image src={item.img} alt="" fill className="object-contain" />
                            </div>
                        )}


                        {/* text container */}
                        <div className="flex flex-col flex-1 justify-between  text-center text-red-500">
                            <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                            <p className='p-4 2xl:p-8'>{item.desc}</p>
                            <span className='text-xl font-bold'>{item.price}</span>
                            <button className='bg-red-800 text-white px-2 py-1 rounded-md' title='Order now'>Add to cart</button>
                        </div>
                    </div>))}
            </div>

        </div>
    )
}

export default Featured
