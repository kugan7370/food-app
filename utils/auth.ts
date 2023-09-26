import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions, getServerSession, User } from "next-auth"
import prisma from "./connect"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

declare module "next-auth" {
    interface Session {
        user: User & {
            isAdmin: boolean
        }
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        isAdmin: boolean
    }
}


export const authOptions: NextAuthOptions = ({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",

    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
    ],

    callbacks: {
        //add isAdmin to session
        async session({ session, token }) {
            if (token) {
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        //add isAdmin to jwt
        async jwt({ token }) {
            const userInDb = await prisma.user.findUnique({
                where: {
                    email: token.email!
                }
            })
            token.isAdmin = userInDb?.isAdmin!

            return token
        }





    },
})

//this is for server side
export const getAuthSession = async () => {
    return getServerSession(authOptions)
}



