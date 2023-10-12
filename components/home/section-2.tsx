import Link from 'next/link'
import { Button } from '../ui/button'
import BlurImage from '../blur-image'
import { BookmarkIcon, VideoIcon } from '@radix-ui/react-icons'
import { Home } from '@/feature/sanity'
import { HeartIcon } from '@sanity/icons'

const Section2 = ({ data }: { data: Home['section_2'] }) => {
  return (
    <div className="py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 flex-wrap-reverse">
        <div className="order-2 md:order-1">
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
              <Button size={'lg'} className="bg-main rounded-xl shadow-lg shadow-purple-500/50" asChild>
                <Link href={`/${data.call_to_action}`}>
                  {data.call_to_action === 'follow' ? 
                  <HeartIcon width={20} height={20} strokeWidth={2} className='mr-2'/> : 
                  data.call_to_action === 'videos' ? 
                  <VideoIcon width={20} height={20} strokeWidth={2} className='mr-2'/> : 
                  <BookmarkIcon width={20} height={20} strokeWidth={2} className='mr-2'/>}
                  {data.call_to_action === 'follow' ? 'Follow' : data.call_to_action === 'videos' ? 'See videos' : 'Sponsor us!'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-12 order-1 md:order-2">
          <div className="block md:hidden">
            <h2 className="mb-6 font-normal text-2xl md:text-4xl leading-tight">
              {data.title}
            </h2>
          </div>
          <div className="align-top relative overflow-hidden flex items-center justify-center">
            <BlurImage
              width={550}
              height={650}
              src={data.image}
              className="object-contain rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Section2