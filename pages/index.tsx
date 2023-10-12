import Feature from '@/components/home/feature'
import HeroSlider from '@/components/home/hero-slider'
import Section1 from '@/components/home/section-1'
import Section2 from '@/components/home/section-2'
import Sponsors from '@/components/home/sponsors'
import Teams from '@/components/home/teams'
import { getHomePageData, getSponsors } from '@/feature/sanity'
import Layout from '@/layouts'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  const data = await getHomePageData()

  const sponsors = await getSponsors()

  return { props: { data, sponsors } }
}

export default function Home({ data, sponsors }: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(data, 'data')
  return (
    <Layout showVideoButton={true}>
      <div className='pt-[4rem]'>
        <div className="pb-10">
          <HeroSlider images={data.hero}/>
        </div>
        <Section1 data={data.section_1}/>
        <Feature/>
        <Section2 data={data.section_2}/>
        <Sponsors sponsors={sponsors}/>
        <Teams team={data.team}/>
      </div>
    </Layout>
  )
}
