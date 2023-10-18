import { ReactNode } from 'react'
import Navbar from './navbar'
import { Poppins } from 'next/font/google'
import Footer from './footer'
import { Button } from '@/components/ui/button'
import { VideoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const Layout = ({ children, showVideoButton = false }: { children: ReactNode, showVideoButton?: boolean }) => {
  return (
    <div className={`relative flex min-h-screen flex-col overflow-hidden ${poppins.className}`}>
      <div>
        <Navbar/>
      </div>
      <main className="flex-1 relative">
        {children}
        {showVideoButton && 
        <Button 
        className='bg-main rounded-full fixed bottom-10 md:bottom-16 p-4 h-auto right-4 z-40 animate-bounce' 
        asChild>
          <Link href={'/videos'}>
            <VideoIcon width={24} height={24}/>
          </Link>
        </Button>}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout