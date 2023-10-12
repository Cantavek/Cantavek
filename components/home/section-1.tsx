import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import BlurImage from '../blur-image'
import { BookmarkIcon, HeartIcon, VideoIcon } from '@radix-ui/react-icons'
import { Home } from '@/feature/sanity'

const Section1 = ({ data }: { data: Home['section_1'] }) => {
  return (
    <div className="py-8 md:py-12 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 flex-wrap-reverse">
      <div className="mb-6 md:mb-12 order-1">
        <div className="block md:hidden">
          <h2 className="mb-6 font-normal text-2xl md:text-4xl leading-tight">
            {data.title}
          </h2>
        </div>
        <div className="align-top relative overflow-hidden flex items-center justify-center rounded-2xl">
          <BlurImage
            width={550}
            height={380}
            src={data.image}
            className="object-contain rounded-2xl"
            alt=""
          />
        </div>
      </div>
      <div className="order-2">
        <h2 className="mb-6 font-normal text-2xl md:text-4xl leading-tight hidden md:block">
          {data.title}
        </h2>
        <div style={{ color: 'rgb(35, 36, 38)' }} className="text-lg">
          <p>
            {data.description}
          </p>
        </div>
        <div>
          {/* <div
            style={{ color: 'rgb(35, 36, 38)' }}
            className="font-normal text-sm md:text-base leading-normal"
          >
            <ul className="mb-6 list-disc space-y-3">
              <li className="my-5 mr-0 ml-8">{t('list.1')}</li>
              <li className="my-5 mr-0 ml-8">{t('list.2')}</li>
              <li className="my-5 mr-0 ml-8">{t('list.3')}</li>
            </ul>
          </div> */}
          <div className="mt-6">
            <Button
            size={'lg'}
            className="bg-main rounded-xl shadow-lg shadow-purple-500/50" 
            asChild>
              <Link href={`/${data.call_to_action}`}>
                {data.call_to_action === 'follow' ? 
                <HeartIcon width={20} height={20} strokeWidth={2} className='mr-2'/> : 
                data.call_to_action === 'video' ? 
                <VideoIcon width={20} height={20} strokeWidth={2} className='mr-2'/> : 
                <BookmarkIcon width={20} height={20} strokeWidth={2} className='mr-2'/>}
                {data.call_to_action === 'follow' ? 'Follow' : data.call_to_action === 'video' ? 'See videos' : 'Sponsor us!'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
  
    </div>
  </div>
  )
}

export default Section1