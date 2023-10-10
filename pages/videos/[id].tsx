import { Button } from '@/components/ui/button';
import VideoCard from '@/components/videos/video-card';
import Layout from '@/layouts';
import { HeartIcon } from '@radix-ui/react-icons';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import dayjs from 'dayjs';
import { getOtherVideos, getVideo } from '@/feature/sanity';
import VideoPlayer from '@/components/videos/video-player';
import { useMemo } from 'react';

export async function getServerSideProps(context: GetServerSidePropsContext<{ id: string}>) {
  const session = await await getServerSession(
    context.req,
    context.res,
    authOptions
  )
  const videoId = context.params?.id as string

  const unlock = session?.user.active_bundle && dayjs().isBefore(session.user.active_bundle_expire_at) ? true: false;

  const video = await getVideo(videoId, unlock)
  const otherVideos = await getOtherVideos(videoId)

  return {
    props: { unlock, video, otherVideos }
  }
}

const Video = ({ unlock, video, otherVideos }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  let videoJsOptions =  useMemo(() => {
    if(unlock) {
      return {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: {
          src: video.video
        }
      }
    }else if(!!video.teaser) {
      return {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: {
          src: video.teaser
        }
      }
    }else{
      return {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        poster: !unlock && !video.teaser ? video.poster : null,
      }
    }
  }, [unlock, video.poster, video.teaser, video.video])


  return (
    <Layout>
      <div className='pb-20 pt-20 md:container mx-1.5 md:mx-auto'>
        <div className='max-w-5xl'>
          <VideoPlayer options={videoJsOptions}/>
          <div className='pt-4 flex items-center justify-between space-x-1.5'>
            <h1 className='text-xl font-bold text-gray-800'>{video.title}</h1>
            <Button className='rounded-full bg-main p-3 h-auto'>
              <HeartIcon width={24} height={24}/>
            </Button>
          </div>
        </div>

        <div className="pt-12">
          <div className='border-t'>
            <h2 className='font-semibold text-xl pt-5'>Others you might like</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-5 pb-10'>
              {otherVideos.map((video) => (
                <VideoCard
                key={video._id}
                poster={video.poster}
                title={video.title}
                id={video._id}
                duration={video.duration}
                lock={video.lock && !unlock}
                />
              ))} 
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Video