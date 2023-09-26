/* eslint-disable @next/next/no-img-element */
import Feature from '@/components/home/feature'
import Section1 from '@/components/home/section-1'
import Section2 from '@/components/home/section-2'
import Sponsors from '@/components/home/sponsors'
import Teams from '@/components/home/teams'
import Layout from '@/layouts'

export default function Home() {
  return (
    <Layout>
      <div className='pt-[4rem]'>
        <section className="mb-16">
          <div className='hidden md:block'>
            <img
              width="600"
              height="500"
              className="responsive__img w-full max-w-full h-[26rem] object-cover"
              src={'/Rectangle-2.png'}
              alt={""}
            />
          </div>
          <div className='flex flex-col md:hidden'> 
            <div className='bg-cover bg-no-repeat' style={{ backgroundImage: 'url(/Bckground.jpg)'}}>
              <img
              width="600"
              height="312"
              className="responsive__img w-full max-w-full h-[19.5rem] object-cover"
              src={'/CK-picture-e1683215284632.png'}
              alt={""}
            />
            </div>
            <div className='bg-cover bg-no-repeat' style={{ backgroundImage: 'url(/Bckground.jpg)'}}>
                <img
                width="600"
                height="300"
                className="responsive__img w-full max-w-full h-64 object-contain"
                src={'/text-e1683216320973.png'}
                alt={""}
              />
            </div>
          </div>
        </section>
        <Section1/>
        <Feature/>
        <Section2/>
        <Sponsors/>
        <Teams/>
      </div>
    </Layout>
  )
}
