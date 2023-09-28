"use client"
import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { OrderType } from '@/types/types'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { toast } from 'react-toastify'


const Orders = () => {

    const { status, data: res } = useSession()
    const router = useRouter()

    if (status === 'unauthenticated') {
        router.push('/')
    }

    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
            fetch('http://localhost:3000/api/order').then(
                (res) => res.json(),
            ),
    })

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: ({ id, status }: { id: string, status: string }) => {
            return fetch(`http://localhost:3000/api/order/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(status)

            })
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
        },
    })

    const UpdateStatus = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const input = form.elements[0] as HTMLInputElement
        const status = input.value

        mutation.mutate({ id, status })
        toast.success('order message has been changed')
    }



    if (isLoading || status === 'loading') return 'Loading...'
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
                    {data && data.map((item: OrderType) => (<tr key={item.id} className='odd:bg-red-100 even:bg-green-100 text-sm md:text-base'>
                        <td className='hidden md:block px-2 py-2'>{item.id}</td>
                        <td className='px-2 py-2'>{item.creatAt.toString().slice(0, 10)}</td>
                        <td className='px-2 py-2'>{item.price}</td>
                        <td className='hidden md:block px-2 py-2'>{item.products[0].title}</td>
                        {res?.user.isAdmin ? <td className='px-2 py-2'>
                            <form className='flex items-center justify-center gap-2' onSubmit={(e) => UpdateStatus(e, item.id)}>
                                <input className='py-1 px-2 outline-none' placeholder={item.status} />
                                <button>
                                    <Image src='/edit.png' alt='edit' width={30} height={30} />
                                </button>

                            </form>
                        </td> : <td className='px-2 py-2'>{item.status}</td>}
                    </tr>))}

                </tbody>
            </table>
        </div>
    )
}

export default Orders