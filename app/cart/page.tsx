import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'


const Cart = () => {
    return (
        <div className="flex flex-col lg:flex-row  gap-6 h-[calc(100vh-110px)]">
            {/* cartItemsContainer */}
            <div className="flex flex-col gap-5 h-3/4 lg:w-3/4 p-5 ">
                {/* cart items */}
                <div className="flex justify-between items-center">
                    <div className="ImageContainer relative w-20 h-20">
                        {singleProduct.img && <Image src={singleProduct.img} alt='' fill className='object-contain ' />}
                    </div>

                    <div className="">
                        <h1 className='text-xl font-bold text-red-500'>{singleProduct.title}</h1>
                        <p className='text-sm text-red-500'>Large</p>
                    </div>

                    <h2 className='text-lg font-bold text-red-500'>{singleProduct.price}</h2>
                    <button className='cursor-pointer text-red-500'>X</button>



                </div>
                <div className="flex justify-between items-center">
                    <div className="ImageContainer relative w-20 h-20">
                        {singleProduct.img && <Image src={singleProduct.img} alt='' fill className='object-contain ' />}
                    </div>

                    <div className="">
                        <h1 className='text-xl font-bold text-red-500'>{singleProduct.title}</h1>
                        <p className='text-sm text-red-500'>Large</p>
                    </div>

                    <h2 className='text-lg font-bold text-red-500'>{singleProduct.price}</h2>
                    <button className='cursor-pointer text-red-500'>X</button>



                </div>
                <div className="flex justify-between items-center">
                    <div className="ImageContainer relative w-20 h-20">
                        {singleProduct.img && <Image src={singleProduct.img} alt='' fill className='object-contain ' />}
                    </div>

                    <div className="">
                        <h1 className='text-xl font-bold text-red-500'>{singleProduct.title}</h1>
                        <p className='text-sm text-red-500'>Large</p>
                    </div>

                    <h2 className='text-lg font-bold text-red-500'>{singleProduct.price}</h2>
                    <button className='cursor-pointer text-red-500'>X</button>



                </div>
            </div>

            {/* checkOut */}
            <div className="flex flex-col gap-2 lg:w-3/4 lg:bg-gray-50 lg:justify-center p-5">
                <div className="flex justify-between items-center">
                    <h3 className='font-semibold text-red-500'>Subtotal (3 items)</h3>
                    <h3 className='font-semibold text-red-500'>$81.70</h3>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className='font-semibold text-red-500'>Service Cost</h3>
                    <h3 className='font-semibold text-red-500'>$0.00</h3>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className='font-semibold text-red-500'>Delivery Cost</h3>
                    <h3 className='font-semibold text-green-500'>Free</h3>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h3 className='font-semibold text-red-500 uppercase'>Total(incl vat)</h3>
                    <h3 className='font-semibold text-red-500'>$81.70</h3>
                </div>

            </div>

        </div>
    )
}

export default Cart