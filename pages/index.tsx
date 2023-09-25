/* eslint-disable @next/next/no-img-element */
import Feature from '@/components/home/feature'
import Section2 from '@/components/home/section-2'
import Sponsors from '@/components/home/sponsors'
import Teams from '@/components/home/teams'
import Layout from '@/layouts'

export default function Home() {
  return (
    <Layout>
      <div className='pt-[4rem]'>
        <section className="mb-16">
          <div>
            <img
              width="600"
              height="500"
              className="responsive__img w-full max-w-full h-[26rem] object-cover"
              src={'/Rectangle-2.png'}
              alt={""}
            />
          </div>
        </section>

        <Feature/>
        <Section2/>
        <Sponsors/>
        <Teams/>
      </div>
    </Layout>
  )
}
