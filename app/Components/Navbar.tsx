import Link from 'next/link'
import React from 'react'
import Cart from './Cart'
import Image from 'next/image'
import Toggle from './Toggle'

const Navbar = () => {
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
            name: "Contact",
            url: '/contact',
        }
    ]
    const NavRightLinks = [
        {
            id: 1,
            name: "Orders",
            url: '/',
        },
        {
            id: 2,
            name: "Menu",
            url: '/menu',
        },
        {
            id: 3,
            name: "Cart",
            url: '/cart',
        }
    ]
    return (
        <div className=' relative flex lg:justify-between items-center py-4  border-b-2 border-red-800 px-10 md-px-6'>
            {/* left links */}
            <div className="hidden flex-1 lg:flex md:flex gap-8">
                {NavLeftLinks.map((item) => (
                    <Link className=' hidden lg:flex md:flex  md:text-base lg:text-lg text-red-800 font-bold' key={item.id} href={item.url}>{item.name}</Link>
                ))}
            </div>

            {/* heading */}
            <div className="flex-1 lg:text-center  md:text-center">
                <h1 className='uppercase  text-lg font-extrabold tracking-wide text-red-800'>Massimo</h1>
            </div>

            {/*   right links*/}
            <div className="hidden flex-1 lg:flex md:flex justify-center items-center  gap-8">
                <div className='md:hidden lg:flex  gap-2 bg-yellow-500 px-2 py-1 rounded-md relative'>
                    <Image src="/phone.png" alt='phone' width={18} height={18} />
                    <h5 className='text-red-800 md:text-base font-bold'>555 44 00</h5>
                </div>
                <Link className='text-lg text-red-800 md:text-base font-bold' href='/orders'>Orders</Link>
                <Cart />
            </div>

            <Toggle />


        </div>

    )
}

export default Navbar
