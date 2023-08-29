import Price from '@/app/Components/Options'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProducts = () => {



    return (
        <div className='w-screen '>
            {/* innerContainer */}
            {singleProduct && <div className="h-[calc(100vh-110px)]  lg:flex-row lg:justify-center items-center  w-full flex flex-col justify-between gap-10">
                {/* imagecontainer */}
                <div className="relative  w-full h-1/2 md:h-[60%]">
                    {singleProduct.img && <Image src={singleProduct.img} alt='' fill className='object-contain' />}
                </div>

                {/* detail container */}
                <div className="flex flex-col gap-4 text-red-500 px-10">
                    <h1 className='text-xl font-bold'>{singleProduct.title}</h1>
                    <p className='text-sm'>{singleProduct.desc}</p>
                    <Price basicPrice={singleProduct.price} options={singleProduct.options} />
                </div>
            </div>}

        </div>
    )
}

export default SingleProducts
