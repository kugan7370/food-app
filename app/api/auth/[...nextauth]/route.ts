import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth/next";

//this is for client side
const handler = NextAuth(authOptions)

export {
    handler as GET, handler as POST
}