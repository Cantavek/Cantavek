import { ReactNode } from 'react'
import Navbar from './navbar'
import { Inter } from 'next/font/google'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`relative flex min-h-screen flex-col ${inter.className}`}>
      {/* <SiteHeader/> */}
      <Navbar/>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
      <Footer/>
    </div>
  )
}

export default Layout