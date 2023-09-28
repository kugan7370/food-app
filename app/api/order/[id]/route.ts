import prisma from "@/utils/connect"
import { NextRequest, NextResponse } from 'next/server'

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        const body = await req.json()

        await prisma.order.update({
            where: {
                id: id
            },
            data: { status: body }
        })

        return new NextResponse(JSON.stringify('status has been updated'), { status: 201 })



    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "something went wrong", }), { status: 500 })

    }

}