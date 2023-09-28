"use client"

import React, { use } from 'react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'


const UserLinks = () => {
    const { data, status } = useSession()
    return (
        <>
            {status === 'authenticated' ?
                <>
                    <h1 className='text-lg text-red-800 md:text-base font-bold cursor-pointer' onClick={() => signOut()}>Logout</h1>
                    <Link className='text-lg text-red-800 md:text-base font-bold cursor-pointer' href='/order'>Orders</Link>
                </> :
                <Link className='text-lg text-red-800 md:text-base font-bold cursor-pointer' href='/login'>Login</Link>
            }
        </>
    )
}

export default UserLinks