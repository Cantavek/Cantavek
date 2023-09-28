import VideoCard from '@/components/videos/video-card'
import Layout from '@/layouts'
import { VideoIcon } from '@radix-ui/react-icons'

const Videos = () => {
  return (
    <Layout>
      <div className='pb-20 pt-20 md:container mx-3'>
        <h1 className='flex items-center space-x-2 text-3xl font-semibold pt-1.5 md:pt-4'>
          <VideoIcon width={26} height={26}/>
          <span>Videos</span>
        </h1>

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
          />
        </div>
      </div>
    </Layout>
  )
}

export default Videos