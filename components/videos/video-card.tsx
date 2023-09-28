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
}

const VideoCard = ({ poster, title, id, lock, duration }: Props) => {
  return (
    <div>
      <div>
        <Link href={`/videos/${id}`} className='relative'>
          <Image
          width={700}
          height={470}
          src={poster}
          alt={``}
          className="w-full h-full object-cover bg-skeleton rounded"
          />
          <div className='absolute top-4 right-2.5'>
            <Button className='text-xs bg-main p-2 shadow-md h-auto rounded-full'>
              <LockClosedIcon strokeWidth={3}/>
            </Button>
          </div>
          <div className='absolute bottom-3 right-2.5 bg-foreground text-background px-1.5 py-0.5 rounded text-sm'>
            <span>{duration}</span>
          </div>
        </Link>

        <div className='pt-3'>
          <p className='text-gray-700 font-semibold'>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard