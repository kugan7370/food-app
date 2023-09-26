"use client"
import Image from 'next/image'
import React from 'react'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const { data, status } = useSession()
    const router = useRouter()

    if (status === 'loading') return <h1>loading...</h1>
    if (status === 'authenticated') return router.push('/')


    return (
        <div className='h-[calc(100vh-110px)] w-screen flex justify-center items-center'>
            {/* main container */}
            <div className="lg:w-[60%] lg:h-[80%] h-full w-screen flex  flex-col lg:flex-row gap-4 p-2 ">

                {/* iamgeContainer */}
                <div className="lg:flex-1 h-2/5 lg:h-full w-full m-auto lg:w-full    relative">
                    <Image src="/loginBg.png" alt="" fill className="object-contain" />
                </div>

                <div className="details h-3/5  lg:h-full text-center  lg:flex-1 flex flex-col  gap-6 lg:gap-10">
                    <h1 className='font-bold text-base lg:text-2xl text-center'>Welcome</h1>
                    <p>log into your account or creat a new one using social buttons</p>

                    <div className="social-button w-[60%] mx-auto flex flex-col lg:gap-10 gap-4">
                        <div className="flex gap-4 items-center shadow-md cursor-pointer p-1" onClick={() => signIn('google')}>
                            <div className="relative h-5 w-5 lg:h-10 lg:w-10">
                                <Image src="/google.png" alt="" fill className="object-contain " />

                            </div>
                            <h2>Sign in with Google</h2>
                        </div>
                        <div className="flex gap-4 items-center shadow-md cursor-pointer p-1">
                            <div className="relative  h-5 w-5 lg:h-10 lg:w-10">
                                <Image src="/facebook.png" alt="" fill className="object-contain " />

                            </div>
                            <h2>Sign in with Facebook</h2>
                        </div>
                    </div>

                    <p>Have a problem? Contact Us</p>

                </div>


            </div>
        </div>
    )
}

export default LoginPage