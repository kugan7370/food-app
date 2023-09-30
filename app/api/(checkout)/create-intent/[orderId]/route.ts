import prisma from "@/utils/connect";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (req: NextRequest, { params }: { params: { orderId: string } }) => {


    const { orderId } = params


    try {
        const order = await prisma.order.findUnique({
            where: {
                id: orderId
            }
        })


        if (order) {

            const paymentIntent = await stripe.paymentIntents.create({
                amount: Number(order.price) * 100,
                currency: "usd",
                automatic_payment_methods: {
                    enabled: true,
                },
            });



            //update order intent
            await prisma.order.update({
                where: {
                    id: orderId
                },
                data: {
                    intent_id: paymentIntent.id
                }
            })

            return new NextResponse(JSON.stringify({ client_secret: paymentIntent.client_secret }), { status: 200 })


        }
        else {
            return new NextResponse(JSON.stringify({ message: "order not found" }), { status: 404 })
        }
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "something went wrong" }), { status: 500 })
    }


}