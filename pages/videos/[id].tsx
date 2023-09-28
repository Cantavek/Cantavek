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
      <div className='pb-20 pt-24 md:container mx-3'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
          <div className='col-span-4'>
            <VideoPlayer/>
          </div>
          <div className='col-span-2'></div>
        </div>
      </div>
    </Layout>
  )
}

export default Video