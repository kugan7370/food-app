"use client"
import Link from 'next/link'
import React from 'react'

const Cart = () => {
    return (
        <div>
            <Link className='text-lg md:text-base text-red-800 font-bold' href='/cart'>
                Cart (20)
            </Link>
        </div>
    )
}

export default Cart
