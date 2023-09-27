import prisma from "@/utils/connect"
import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { json } from "stream/consumers"

// get all products
export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')

    try {
        const products = await prisma.product.findMany(
            {
                where: {
                    ...(cat ? { catSlug: cat } : { isFeatured: true })
                },
            }


        )
        return new NextResponse(JSON.stringify(products), { status: 200 })

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "something went wrong", }), { status: 500 })
    }
}