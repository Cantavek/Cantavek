import { PropsWithChildren } from 'react'
import Navbar from './navbar'
import { Poppins } from 'next/font/google'
import Footer from './footer'
import { Button } from '@/components/ui/button'
import { VideoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const Layout = ({ children, showVideoButton = false }: PropsWithChildren<{ showVideoButton?: boolean }>) => {
  return (
    <div className={`relative flex min-h-screen flex-col overflow-hidden ${poppins.className}`}>
      <div>
        <Navbar/>
      </div>
      <main className="flex-1 relative">
        {children}
        {showVideoButton && 
        <div className='fixed bottom-6 md:bottom-16 right-4 z-40 flex flex-col space-y-3'>
          <Button 
          className='bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full  p-4 h-auto animate-bounce' 
          asChild>
            <a target='_blank' href={'https://www.avyga.com/orgs/a0eda625-4f60-498a-b362-50b8b5e0076e'}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#fff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
            </a>
          </Button>
          <Button 
          className='bg-main rounded-full  p-4 h-auto animate-bounce' 
          asChild>
            <Link href={'/videos'}>
              <VideoIcon width={24} height={24}/>
            </Link>
          </Button>  
        </div>}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout