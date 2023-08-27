'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [slideNumber, setslideNumber] = useState(0)
    const data = [
        {
            id: 1,
            title: "always fresh & always crispy & always hot",
            image: "/slide1.png",
        },
        {
            id: 2,
            title: "we deliver your order wherever you are in NY",
            image: "/slide2.png",
        },
        {
            id: 3,
            title: "the best pizza to share with your family",
            image: "/slide3.jpg",
        },
    ];

    useEffect(() => {
        const intervel = setInterval(() => {
            setslideNumber((pre) => pre == data.length - 1 ? 0 : pre + 1)

        }, 2000)

        return () => clearInterval(intervel)

    }, [])

    return (
        <div className='h-[calc(100vh-112px)] flex flex-col lg:flex-row  md:flex-row'>
            <div className="sliderTitle flex-1 flex justify-center items-center flex-col gap-4 text-center p-10">
                <h1 className='uppercase  text-lg font-extrabold tracking-wide text-red-800'>{data[slideNumber]?.title}</h1>
                <button className='bg-red-800 text-white px-2 py-1 rounded-md' title='Order now'> Order now</button>
            </div>
            <div className="flex-1 relative">
                <Image src={data[slideNumber]?.image} alt='' fill className='object-cover' />
            </div>

        </div>
    )
}

export default Slider
