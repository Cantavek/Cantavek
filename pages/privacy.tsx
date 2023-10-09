import BreadCrumbs from '@/components/bread-crumbs'
import { getPage } from '@/feature/sanity'
import BlockText from '@/feature/sanity/block-text'
import Layout from '@/layouts'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import React from 'react'

export const getStaticProps = async () => {
  const data = await getPage('Privacy Policy')

  return { props: { data } }
}

const Privacy = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <section className="my-10 md:my-14 pt-16">  
        <div className="container mx-auto w-full px-2 md:px-7">
          <BreadCrumbs actualPage='Privacy Policy'/>
        </div>
      </section>
      {data?.image && <section className="mb-16 -mt-4">
        <div className="container mx-auto w-full px-2 md:px-7">
          <Image
          width={1100}
          height={385}
          className="responsive__img w-full rounded-lg max-w-full h-96 object-cover"
          src={data.image}
          alt={"About page image"}
          />
        </div>
      </section>}
      <section className='pb-16'>
        <div className="container mx-auto w-full px-7 max-w-3xl">
          <div className="2xl:px-20 min-h-screen ">
            <div className="bard text-gray-600 dark:text-gray-200">
              <div className="intro text-base md:text-lg !leading-6 md:!leading-8 mb-8">
                {data.intro}
              </div>
              <div className="prose lg:prose-xl dark:prose-invert">
                <BlockText value={data.body}/>  
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Privacy