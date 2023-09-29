import { Button } from '@/components/ui/button'
import VideoCard from '@/components/videos/video-card'
import Layout from '@/layouts'
import { HeartIcon, VideoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const Videos = () => {
  return (
    <Layout>
      <div className='pb-20 pt-20 md:container mx-3'>
        <div className='flex items-center justify-between pt-4'>
          <h1 className='flex items-center space-x-2 text-3xl font-semibold'>
            <VideoIcon width={26} height={26}/>
            <span>Videos</span>
          </h1>

          {/* <Button size={'sm'}>
            Time remaining - 45jours
          </Button> */}
          <Button size={'sm'} asChild
        className="bg-main rounded-xl shadow-lg shadow-purple-500/50">
          <Link href={'/follow'}>
            <HeartIcon width={20} height={20} strokeWidth={2} className='mr-2'/>
            Choose a plan
          </Link>
        </Button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-5 pb-10'>
          <VideoCard
          poster='/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
          id='fjfjfjf'
          duration='3:43'
          />
          <VideoCard
          poster='/kal-visuals-V1b1YDaesD4-unsplash.jpg'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
          id='fjfjfjf'
          duration='1:56'
          />
          <VideoCard
          poster='/philip-myrtorp-MmjwlWNkXks-unsplash.jpg'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
          id='fjfjfjf'
          duration='3:13'
          lock={false}
          />
          <VideoCard 
          poster='/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
          id='fjfjfjf'
          duration='4:05'
          />
          <VideoCard
          poster='/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
          id='fjfjfjf'
          duration='5:23'
          />
          <VideoCard
          poster='/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
          id='fjfjfjf'
          duration='2:40'
          lock={false}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Videos