import prisma from "@/utils/connect"
import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { json } from "stream/consumers"

// get all category
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()
        return new NextResponse(JSON.stringify(categories), { status: 200 })

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "something went wrong", }), { status: 500 })
    }
}