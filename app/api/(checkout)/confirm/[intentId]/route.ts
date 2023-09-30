import prisma from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

export const PUT = async (req: NextRequest, { params }: { params: { intentId: string } }) => {
    const { intentId } = params
    try {


        await prisma.order.update({
            where: {
                intent_id: intentId
            },
            data: { status: "being prepared" }
        })

        return new NextResponse(JSON.stringify('status has been updated'), { status: 201 })



    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "something went wrong", }), { status: 500 })

    }

}