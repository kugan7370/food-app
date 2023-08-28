import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'
const Offers = () => {
    return (
        <div className="h-[100vh] md:h-[0vh] lg:h-[70vh] gap-2 flex flex-col md:flex-row lg:flex-row w-screen p-10 bg-black text-white bg-[url('/offerBg.png')]">
            {/* left */}
            <div className="flex flex-col flex-1 gap-8  px-8  lg:px-10">
                <h1 className='text-4xl lg:text-6xl font-bold'>Delicious Burger <br></br> & French Fry</h1>
                <p className='text-base font-semibold'>Progressively simplify effective e-toiler and process- centric methods of empowerment. Quickly pontificate parallel.</p>
                <CountDown />
                <button className='bg-red-700 font-bold px-2 py-2 w-32 text-white rounded-md'>Order now</button>

            </div>
            {/* right */}
            <div className="relative flex-1">
                <Image src='/offerProduct1.png' alt='offer image' fill className='object-contain' />
            </div>

        </div>
    )
}

export default Offers
