import { MenuType } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/category", {
        cache: "no-cache"
    })

    if (!res.ok) {
        throw new Error('failed')

    }
    return res.json()
}


const Menu = async () => {
    const menu: MenuType = await getData()
    return (
        <div className="h-[calc(100vh-110px)] w-screen md:flex md:justify-center md:px-32 md:py-20  ">
            {/* innerContainer */}
            {menu && menu.map((item) => (
                <Link href={`/menu/${item.slug}`} key={item.id} className="h-1/3 w-full p-5 md:h-full" style={{ backgroundImage: `url(${item.img})` }}>
                    <h1 className={`text-${item.color == 'white' ? 'white' : 'black'} text-2xl font-bold mb-2`}>{item.title}</h1>
                    <p className={`text-${item.color == 'white' ? 'white' : 'black'}`}>{item.desc}</p>
                </Link>))}
        </div>

    )
}

export default Menu
