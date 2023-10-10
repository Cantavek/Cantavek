import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useSession } from 'next-auth/react'

dayjs.extend(relativeTime)

const BundleDrawer = () => {
  const { data } = useSession()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-xl shadow-lg text-xs">
            Ended {dayjs().to(data?.user.active_bundle_expire_at)}
        </Button>
      </DialogTrigger>
      <DialogContent className='rounded-xl max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-gray-700'>Club</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-w justify-center items-center">
            <h1 className='font-medium text-2xl'>{data?.user.active_bundle?.name}</h1>
            <div className='flex flex-col items-center space-y-2 mt-5'>
              <Button>
                Buy it:  {dayjs(data?.user.active_bundle_expire_at).subtract(data?.user.active_bundle?.duration as number, 'months').format('DD MMM YYYY')}
              </Button>
              <Button className='bg-secondary text-primary hover:bg-secondary'>
                Finish it: {dayjs(data?.user.active_bundle_expire_at).format('DD MMM YYYY')}
              </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BundleDrawer