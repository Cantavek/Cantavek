import Feature from '@/components/home/feature'
import HeroSlider from '@/components/home/hero-slider'
import Section1 from '@/components/home/section-1'
import Section2 from '@/components/home/section-2'
import Sponsors from '@/components/home/sponsors'
import Teams from '@/components/home/teams'
import { getHomePageData } from '@/feature/sanity'
import Layout from '@/layouts'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  const data = await getHomePageData()

  return { props: { data } }
}

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(data, 'data')
  return (
    <Layout showVideoButton={true}>
      <div className='pt-[4rem]'>
        <div className="pb-10">
          <HeroSlider/>
        </div>
        <Section1/>
        <Feature/>
        <Section2/>
        <Sponsors sponsors={data.sponsors}/>
        <Teams team={data.team}/>
      </div>
    </Layout>
  )
}
