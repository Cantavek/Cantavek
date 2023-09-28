import VideoCard from '@/components/videos/video-card'
import Layout from '@/layouts'
import { VideoIcon } from '@radix-ui/react-icons'

const Videos = () => {
  return (
    <Layout>
      <div className='pb-20 pt-24 md:container mx-3'>
        <h1 className='flex items-center space-x-2 text-3xl font-semibold pt-4'>
          <VideoIcon width={26} height={26}/>
          <span>Videos</span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-5 pb-10'>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
        </div>
      </div>
    </Layout>
  )
}

export default Videos