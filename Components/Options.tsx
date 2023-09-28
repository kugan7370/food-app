'use client'
import React, { useEffect } from 'react'

import { useState } from 'react'

interface Props {
    basicPrice: number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({ basicPrice, options }: Props) => {

    const [quality, setQuality] = useState(1)
    const [option, setOption] = useState(0)
    const [totalPrice, settotalPrice] = useState(basicPrice)


    useEffect(() => {
        settotalPrice((options?.length ? (options[option].additionalPrice + basicPrice) : basicPrice) * quality)

    }, [quality, option, basicPrice, options])




    return (
        <div className='flex flex-col gap-4'>
            <span className='text-lg font-bold'>{totalPrice.toFixed(2)}</span>

            {/* optionContainer */}
            <div className="flex gap-4">
                {options?.length && options.map((item, index) => (
                    <button key={index} style={{ backgroundColor: option === index ? "rgb(239 68 68)" : "white", color: option === index ? "white" : "rgb(239 68 68)" }} onClick={() => setOption(index)} className={`px-4 py-2 ring-1 ring-red-500 rounded-md`}>{item.title}</button>
                ))}

            </div>

            {/* quantity container */}
            <div className=" text-red-500 ring-1 ring-red-500  rounded-md flex justify-between items-center">
                <div className="flex justify-between w-3/4 items-center">
                    <h4 className='px-4'>Quality</h4>
                    <div className="flex gap-4">
                        <button className='text-sm' onClick={() => setQuality((pre) => pre > 1 ? pre - 1 : 1)}>{'<'}</button>
                        <span>{quality}</span>
                        <button className='text-sm mr-2' onClick={() => setQuality((pre) => pre >= 9 ? 9 : pre + 1)}>{'>'}</button>
                    </div>

                </div>
                <button className='p-3 w-52 bg-red-500 text-white  ring-1 ring-red-500 font-bold uppercase rounded-r-md '>Add to cart</button>

            </div>
        </div>
    )
}

export default Price