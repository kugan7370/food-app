import React from 'react'

const Orders = () => {
    return (
        // mainContainer
        <div className='w-[90%] m-auto'>
            {/* order tables */}
            <table className='w-full border-spacing-2 border-separate'>
                <thead>
                    <tr className='text-left text-sm md:text-base' >
                        <th className='hidden md:block px-2 py-1'>Order Id</th>
                        <th className='px-2 py-2'>Date</th>
                        <th className='px-2 py-2'>Price</th>
                        <th className='hidden md:block px-2 py-2'>Product</th>
                        <th className='px-2 py-2'>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-red-100 text-sm md:text-base'>
                        <td className='hidden md:block px-2 py-2'>#2145</td>
                        <td className='px-2 py-2'>20.09.2023</td>
                        <td className='px-2 py-2'> $100.50</td>
                        <td className='hidden md:block px-2 py-2'> this products is best</td>
                        <td className='px-2 py-2'>Delivered</td>
                    </tr>
                    <tr className='bg-green-100 text-sm md:text-base'>
                        <td className='hidden md:block px-2 py-2'>#2145</td>
                        <td className='px-2 py-2'>28.09.2023</td>
                        <td className='px-2 py-2'> $100.50</td>
                        <td className='hidden md:block px-2 py-2'> this products is best</td>
                        <td className='px-2 py-2'>Delivered</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Orders