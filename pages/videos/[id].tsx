import { Button } from '@/components/ui/button';
import VideoCard from '@/components/videos/video-card';
import Layout from '@/layouts';
import { HeartIcon } from '@radix-ui/react-icons';
import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/videos/video-player'), { ssr: false})

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {}
  }
}

const Video = () => {
  return (
    <Layout>
      <div className='pb-20 pt-20 md:container mx-1.5 md:mx-auto'>
        <div className='max-w-5xl'>
          <VideoPlayer/>
          <div className='pt-4 flex items-center justify-between space-x-1.5'>
            <h1 className='text-xl font-bold text-gray-800'>The Cool video you even seen</h1>
            <Button className='rounded-full bg-main p-3 h-auto'>
              <HeartIcon width={24} height={24}/>
            </Button>
          </div>
        </div>

        <div className="pt-12">
          <div className='border-t'>
            <h2 className='font-semibold text-xl pt-5'>Others you might like</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-5 pb-10'>
              <VideoCard
              poster='/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
              id='fjfjfjf'
              duration='1:40'
              />
              <VideoCard
              poster='/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
              id='fjfjfjf'
              duration='2:40'
              />
              <VideoCard
              poster='/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
              id='fjfjfjf'
              duration='3:40'
              />
              <VideoCard
              poster='/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
              id='fjfjfjf'
              duration='4:40'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Video