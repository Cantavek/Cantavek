import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { LockClosedIcon } from '@radix-ui/react-icons'

const VideoCard = () => {
  return (
    <div>
      <div>
        <Link href={`/videoss/jfjjd`} className='relative'>
          <Image
            width={700}
            height={470}
            src={'/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'}
            alt={``}
            className="w-full h-full object-cover bg-skeleton rounded-xl"
          />
          <div className='absolute top-4 right-2.5'>
            <Button className='text-xs bg-main p-2 shadow-md h-auto rounded-full'>
              <LockClosedIcon strokeWidth={3}/>
            </Button>
          </div>
        </Link>

        <div className='pt-3'>
          <p className='text-gray-700 font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae molestias tempo?
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard