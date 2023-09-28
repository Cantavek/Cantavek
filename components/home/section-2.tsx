import Link from 'next/link'
import { Button } from '../ui/button'
import BlurImage from '../blur-image'
import { VideoIcon } from '@radix-ui/react-icons'

const Section2 = () => {
  return (
    <div className="py-12 bg-white" style={{ color: 'rgb(35, 36, 38)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 flex-wrap-reverse">
        <div className="order-2 md:order-1">
          <h2 className="mb-6 font-normal text-2xl md:text-4xl leading-tight hidden md:block">
            Lancement de la première édition FOLLOW CANTAVE.K
          </h2>
          <div style={{ color: 'rgb(35, 36, 38)' }} className="text-lg">
            <p>
            Le comédien Cantave.K a procédé au lancement officiel de « Follow Cantave K Tour 2022”, ce lundi 22 avril, à travers une conférence de presse présentée dans les locaux de Banj, à Delmas 66. Le premier spectacle a eu lieu le dimanche 8 mai à Le Villate sous l’obédience de l’agence évènementielle Event City.
            </p>
          </div>
          <div>
            {/* <div
              style={{ color: 'rgb(35, 36, 38)' }}
              className="font-normal text-sm md:text-base leading-normal"
            >
              <ul className="mb-6 list-disc space-y-3">
                <li className="my-5 mr-0 ml-8">{t('list.1')}</li>
                <li className="my-5 mr-0 ml-8">{t('list.2')}</li>
                <li className="my-5 mr-0 ml-8">{t('list.3')}</li>
              </ul>
            </div> */}
            <div className="mt-6">
              <Button size={'lg'} className="bg-main rounded-xl shadow-lg shadow-purple-500/50" asChild>
                <Link href={'/videos'}>
                  <VideoIcon width={20} height={20} strokeWidth={2} className='mr-2'/>
                  See content
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-12 order-1 md:order-2">
          <div className="block md:hidden">
            <h2 className="mb-6 font-normal text-2xl md:text-4xl leading-tight">
            Lancement de la première édition FOLLOW CANTAVE.K
            </h2>
          </div>
          <div className="align-top relative overflow-hidden flex items-center justify-center">
            <BlurImage
              width={550}
              height={650}
              src="/75D32E30-23AF-4ACD-8AEF-9A2CCED70C3D.jpeg"
              className="object-contain rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Section2