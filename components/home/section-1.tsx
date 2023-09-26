import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import BlurImage from '../blur-image'

const Section1 = () => {
  return (
    <div className="py-12 bg-white" style={{ color: 'rgb(35, 36, 38)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 flex-wrap-reverse">
      <div className="mb-6 md:mb-12 order-1">
        <div className="block md:hidden">
          <h2 className="mb-6 font-normal text-2xl md:text-4xl leading-tight">
          CANTAVE K COMEDY CLUB
          </h2>
        </div>
        <div className="align-top relative overflow-hidden flex items-center justify-center">
          <BlurImage
            width={550}
            height={650}
            src="/Cantekcomedyclub_93-min_50-scaled.jpg"
            className="object-contain rounded-xl"
            alt=""
          />
        </div>
      </div>
      <div className="order-2">
        <h2 className="mb-6 font-normal text-2xl md:text-4xl leading-tight hidden md:block">
        CANTAVE K COMEDY CLUB
        </h2>
        <div style={{ color: 'rgb(35, 36, 38)' }} className="text-lg">
          <p>
          Près d’un an après sa grande tournée nationale « Follow Cantave K », l’humoriste Kerven Cantave, dit Cantave K, lance son propre « Comedy club ». Baptisé « Cantave K Comedy Club », la grande première inaugurale a eu lieu le samedi 10 juin 2023 à Café 36, Pétion-Ville.
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
            <Button  className="!rounded-3xl bg-main" asChild>
              <Link href={'/follow'}>Follow</Link>
            </Button>
          </div>
        </div>
      </div>
  
    </div>
  </div>
  )
}

export default Section1