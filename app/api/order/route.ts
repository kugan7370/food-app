import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

// get all orders
export const GET = async (req: NextRequest) => {
    //get server side session
    const session = await getAuthSession()




    try {
        if (session) {
            //get all orders if user is admin
            if (session.user.isAdmin) {
                const products = await prisma.order.findMany()
                return new NextResponse(JSON.stringify(products), { status: 200 })

            }


            // get user orders
            const products = await prisma.order.findMany({
                where: {
                    userEmail: session.user.email!
                },

            })

            return new NextResponse(JSON.stringify(products), { status: 200 })
        }

        else {
            return new NextResponse(JSON.stringify({ message: "you are not authorized", }), { status: 401 })

        }



    } catch (error) {

        return new NextResponse(JSON.stringify({ message: "something went wrong", }), { status: 500 })
    }
}