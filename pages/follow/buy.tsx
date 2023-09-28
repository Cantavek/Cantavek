import PaymentCard from '@/components/cards/payment-card'
import SignInCard from '@/components/cards/signin-card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

export type Section = 'login' | 'register' | 'pay';

const Buy = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState<Section>('login')

  const handleChangeSection = (section: Section) => setSection(section)

  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2 relative">
      <Link href="/" className="absolute left-8 top-8 z-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" className="h-8 mr-3" alt="Cantavek Logo"/>
      </Link>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1 z-40 px-2 sm:px-6">
        <section className={ "container max-w-lg grid items-center gap-8 pb-8 pt-6 md:py-8 px-1 md:px-12"}>
          {section === 'login' && <SignInCard handleSubmit={handleChangeSection} />}
          {section === 'pay' && <PaymentCard/>}
        </section>
      </main>
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/Cantekcomedyclub_93-min_50-scaled.jpg"
          alt="A skateboarder doing a high drop"
          priority
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
      </AspectRatio>
    </div>
  )
}

export default Buy