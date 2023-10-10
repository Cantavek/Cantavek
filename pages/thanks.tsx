import Layout from '@/layouts'
import { VideoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const Thanks = () => {
  return (
   <Layout>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col items-center space-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-4xl font-bold">Thank You !</h1>
            <p className='pb-3 text-center'>Thank you for your support! Hope you enjoy the experience.</p>
            <Link href="/videos"
            className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring ">
              <VideoIcon className="w-5 h-5 mr-2"/>
              <span className="text-sm font-medium">
                Browse videos
              </span>
            </Link>
          </div>
        </div>
      </div>
   </Layout>
  )
}

export default Thanks