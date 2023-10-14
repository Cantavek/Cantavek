import SponsorCreatedDialog from '@/components/sponsor-created-dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getSponsorTypes } from '@/feature/sanity'
import Layout from '@/layouts'
import { InferGetStaticPropsType } from 'next'
import { useState } from 'react'

export async function getStaticProps() {
  const data = await getSponsorTypes()

  return { props: { data }, revalidate: 14400 }
}


const Sponsoring = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currency, setCurrency] = useState('usd')

  return (
    <Layout>
      <div className='pb-20 pt-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='mx-4 pt-12 pb-3'>
            <h2 className="text-3xl font-semibold pb-2">Contribute</h2>
            <p className='text-gray-700 '>Become a financial contributor.</p>

            <h1 className='text-3xl font-bold text-gray-800 pt-8'>Financial Contributions</h1>
          </div>
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
                {data.map((sponsorType) => (
                  <div className={"relative flex flex-col min-w-[18rem] max-w-[21rem] bg-white shadow-lg rounded-2xl justify-between border hover:border-[#be148e]"}
                  key={sponsorType._id}
                  >
                    <div className='h-28 bg-[#be148e] relative rounded-t-2xl'>
                      <div className='bg-white rounded-md px-3 py-1 text-gray-700 absolute bottom-2 left-2 text-sm font-semibold'>
                        Menbership
                      </div>
                    </div>
                      <div className='w-full pt-5 pb-12 pl-6'>
                      <h2 className="text-xl font-bold pb-3">{sponsorType.name}</h2>
                      <p className='text-gray-700 text-sm'>{sponsorType.description}</p>
                      
                    </div>
                    <div className="mt-6 w-full p-6">
                      <div className='pb-5'>
                        <span className="text-4xl font-bold">
                          {currency === 'usd' ? `$${sponsorType.price_usd}` : `${sponsorType.price_gdes} HTG`}
                        </span>
                      </div>
                      <SponsorCreatedDialog currency={currency} sponsorTypeId={sponsorType._id}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Sponsoring