"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Toggle = () => {
    const [open, setopen] = useState(false)

    const NavLeftLinks = [
        {
            id: 1,
            name: "Home",
            url: '/',
        },
        {
            id: 2,
            name: "Menu",
            url: '/menu',
        },
        {
            id: 3,
            name: "Working Hours",
            url: '/working-hours',
        },
        {
            id: 4,
            name: "Contact",
            url: '/contact',
        }
    ]
    return (
        <div>
            <div className='lg:hidden md:hidden '>
                {/* toggle button */}
                <div className="">
                    {!open ? <Image src="/open.png" alt='open' width={20} height={20} onClick={() => setopen(true)} /> : <Image src="/close.png" alt='open' width={20} height={20} onClick={() => setopen(false)} />}
                </div>

            </div>

            {open &&
                <div className=" lg:hidden md:hidden flex flex-col gap-4 absolute left-0 top-[60px]  w-full text-center h-[calc(100vh-100px)] bg-red-500 text-white  justify-center items-center">
                    {NavLeftLinks.map((item) => (
                        <Link className='text-lg  font-bold' key={item.id} href={item.url}>{item.name}</Link>
                    ))}
                </div>
            }

        </div>
    )
}


export default Toggle
