import Feature from '@/components/home/feature'
// import Hero from '@/components/home/hero'
import HeroSlider from '@/components/home/hero-slider'
import Section1 from '@/components/home/section-1'
import Section2 from '@/components/home/section-2'
import Sponsors from '@/components/home/sponsors'
import Teams2 from '@/components/home/teams2'
import Layout from '@/layouts'

export default function Home() {
  return (
    <Layout showVideoButton={true}>
      <div className='pt-[4rem]'>
        {/* <Hero/> */}
        <div className="pb-10">
          <HeroSlider/>
        </div>
        <Section1/>
        <Feature/>
        <Section2/>
        <Sponsors/>
        <Teams2/>
      </div>
    </Layout>
  )
}
