import VideoCard from '@/components/videos/video-card';
import Layout from '@/layouts';
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
      <div className='pb-20 pt-20 md:container mx-3'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
          <div className='col-span-4'>
            <VideoPlayer/>
          </div>
          <div className='col-span-2'>
            <h1 className='text-xl font-bold'>The Cool video you even seen</h1>
          </div>
        </div>

        <div className="pt-8 ">
          <div className='border-t'>
            <h2 className='font-semibold text-xl pt-3'>Others you might like</h2>
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