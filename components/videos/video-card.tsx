import Link from 'next/link'
import { Button } from '../ui/button'
import { LockClosedIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

interface Props {
  poster: string;
  title: string
  lock?: boolean
  id: string;
  duration: string
  hasTeaser: boolean
}

const VideoCard = ({ poster, title, id, lock = true, duration, hasTeaser }: Props) => {
  return (
    <div>
      <div className='relative'>
        <Link href={`/videos/${id}`} className='relative'>
          <Image
          width={700}
          height={470}
          src={poster}
          alt={``}
          className="w-full h-full object-cover bg-skeleton rounded"
          />
          
        </Link>
        <div className='absolute bottom-3 right-2.5 bg-foreground text-background px-1.5 py-0.5 rounded text-sm'>
            <span>{duration}</span>
          </div>
        {lock && <div className='absolute top-4 right-2.5'>
          <Button className='bg-main p-2 shadow-md h-auto rounded-full'>
            <LockClosedIcon strokeWidth={3}/>
          </Button>
        </div>}
        {hasTeaser && <div className='absolute top-4 left-2.5'>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-orange-500/90 text-white">
              Teaser
          </span>
        </div>}
      </div>
      <div className='pt-3'>
        <p className='text-gray-700 font-semibold'>
          {title}
        </p>
      </div>
    </div>
  )
}

export default VideoCard