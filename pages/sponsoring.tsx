import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Layout from '@/layouts'
import Link from 'next/link'
import { useState } from 'react'

const Sponsoring = () => {
  const [currency, setCurrency] = useState('usd')
  return (
    <Layout>
      <div className='pb-20 pt-16'>
        <div className='mx-4 py-6'>
          <h2 className="text-2xl font-semibold pb-2">Contribute</h2>
          <p className='text-gray-700 '>Become a financial contributor.</p>

          <h1 className='text-3xl font-bold text-gray-800 pt-8'>Financial Contributions</h1>
        </div>

        <div className='max-w-6xl mx-auto'>
          <div className="flex items-center justify-center py-6">
            <Select onValueChange={(value) => setCurrency(value)} defaultValue={currency}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select current" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">Dollars ($)</SelectItem>
                <SelectItem value="gdes">Gourde (HTG)</SelectItem>
              </SelectContent>
            </Select>  
          </div>
          <section className="w-full flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex overflow-y-hidden overflow-x-scroll py-4 scrollbar-none space-x-3 pb-4">
                <div className={"relative flex flex-col min-w-[18rem] max-w-[18rem] bg-white shadow-lg rounded-2xl justify-between border hover:border-[#be148e]"}>
                  <div className='h-28 bg-[#be148e] relative rounded-t-2xl'>
                    <div className='bg-white rounded-md px-3 py-1 text-gray-700 absolute bottom-2 left-2 text-sm font-semibold'>
                      Menbership
                    </div>
                  </div>
                    <div className='w-full pt-5 pb-12 pl-6'>
                    <h2 className="text-xl font-bold pb-3">Sponsor</h2>
                    <p className='text-gray-700 text-sm'>Individual sponsor</p>
                    
                  </div>
                  <div className="mt-6 w-full p-6">
                    <div className='pb-5'>
                      <span className="text-4xl font-bold">$25</span>
                      {/* <span>for 6 months</span> */}
                    </div>
                    <Button 
                    asChild
                    className={"w-full bg-[#be148e] rounded-3xl py-5"}>
                      <Link href='/'>
                        Sponsor us!
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className={"relative flex flex-col min-w-[18rem] max-w-[18rem] bg-white shadow-lg rounded-2xl justify-between border hover:border-[#be148e]"}>
                  <div className='h-28 bg-[#be148e] relative rounded-t-2xl'>
                    <div className='bg-white rounded-md px-3 py-1 text-gray-700 absolute bottom-2 left-2 text-sm font-semibold'>
                      Menbership
                    </div>
                  </div>
                    <div className='w-full pt-5 pb-12 pl-6'>
                    <h2 className="text-xl font-bold pb-3">Bronze Sponsor 🥉</h2>
                    <p className='text-gray-700 text-sm'>
                      Be a bronze sponsor with a monthly donation of $100 and get your logo on our repository and website.
                    </p>
                    
                  </div>
                  <div className="mt-6 w-full p-6">
                    <div className='pb-5'>
                      <span className="text-4xl font-bold">$100</span>
                      {/* <span>for 6 months</span> */}
                    </div>
                    <Button 
                    asChild
                    className={"w-full bg-[#be148e] rounded-3xl py-5"}>
                      <Link href='/'>
                        Sponsor us!
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className={"relative flex flex-col min-w-[18rem] max-w-[18rem] bg-white shadow-lg rounded-2xl justify-between border hover:border-[#be148e]"}>
                  <div className='h-28 bg-[#be148e] relative rounded-t-2xl'>
                    <div className='bg-white rounded-md px-3 py-1 text-gray-700 absolute bottom-2 left-2 text-sm font-semibold'>
                      Menbership
                    </div>
                  </div>
                    <div className='w-full pt-5 pb-12 pl-6'>
                    <h2 className="text-xl font-bold pb-3">Silver Sponsor 🥈</h2>
                    <p className='text-gray-700 text-sm'>
                      Be a silver sponsor with a monthly donation of $500 and get your logo on our repository and website.
                    </p>
                    
                  </div>
                  <div className="mt-6 w-full p-6">
                    <div className='pb-5'>
                      <span className="text-4xl font-bold">$10</span>
                      {/* <span>for 6 months</span> */}
                    </div>
                    <Button 
                    asChild
                    className={"w-full bg-[#be148e] rounded-3xl py-5"}>
                      <Link href='/'>
                        Sponsor us!
                      </Link>
                    </Button>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Sponsoring