/* eslint-disable @next/next/no-img-element */
import Feature from '@/components/home/feature'
import Hero from '@/components/home/hero'
import Section1 from '@/components/home/section-1'
import Section2 from '@/components/home/section-2'
import Sponsors from '@/components/home/sponsors'
import Teams from '@/components/home/teams'
import Teams2 from '@/components/home/teams2'
import Layout from '@/layouts'

export default function Home() {
  return (
    <Layout>
      <div className='pt-[4rem]'>
        <Hero/>
        <Section1/>
        <Feature/>
        <Section2/>
        <Sponsors/>
        <Teams2/>
      </div>
    </Layout>
  )
}
