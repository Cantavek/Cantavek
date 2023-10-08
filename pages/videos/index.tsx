import { Button } from '@/components/ui/button'
import VideoCard from '@/components/videos/video-card'
import Layout from '@/layouts'
import { HeartIcon, VideoIcon } from '@radix-ui/react-icons'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from '../api/auth/[...nextauth]'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import { getVideos } from '@/feature/sanity'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const videos = await getVideos()
  return {
    props: {
      videos,
      session: await getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    }
  }
}

const Videos = ({ videos }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = useSession()

  const accessToLockVideos = useMemo(() => {
    if(!data?.user.active_bundle) return false;
    if(dayjs().isAfter(data.user.active_bundle_expire_at)) return false;

    return true;
  }, [data?.user])

  return (
    <Layout>
      <div className='pb-20 pt-24 md:container mx-3'>
        <div className='flex items-center justify-between pt-4'>
          <h1 className='flex items-center space-x-2 text-3xl font-semibold'>
            <VideoIcon width={26} height={26}/>
            <span>Videos</span>
          </h1>
          {!data?.user ? <Button size={'sm'} asChild
          className="bg-main rounded-xl shadow-lg shadow-purple-500/50">
          <Link href={'/follow'}>
            <HeartIcon width={20} height={20} strokeWidth={2} className='mr-2'/>
            Follow or Login
          </Link>
        </Button> : null}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-5 pb-10'>
          {videos.map((video) => (
            <VideoCard
            key={video._id}
            poster={video.poster}
            title={video.title}
            id={video._id}
            duration={video.duration}
            lock={video.lock && !accessToLockVideos}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Videos