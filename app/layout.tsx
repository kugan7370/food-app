import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../Components/Navbar'
import Notification from '../Components/Notification'
import Footer from '../Components/Footer'
import AuthProvider from '@/Components/AuthProvider'
import QueryProvider from '@/Components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food Delivery App',
  description: 'The best food delivery app in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <Notification />
            <Navbar />
            {children}
            {/* <Footer /> */}
            <ToastContainer position='bottom-right' theme='dark' autoClose={3000} />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
