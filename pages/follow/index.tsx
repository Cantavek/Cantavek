import Pricing from '@/components/pricing'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getAllBundle } from '@/feature/sanity/bundle'
import Layout from '@/layouts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async (context) => {
  const bundles = await getAllBundle()

  return { props: { bundles } }
}) satisfies GetStaticProps

const Follow = ({ bundles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className='pb-20 pt-24'>
        <div className='max-w-2xl mx-2 md:mx-auto'>
          <div className='flex justify-center flex-col pb-6 text-center pt-8 '>
            <h1 className='font-bold text-2xl md:text-4xl pb-3'>FOLLOW CANTAVE-K</h1>
            <p>
              Pour supporter Cantave K et promouvoir ses activités, Faites partie du Fan Base de Cantave K en choisissant un plan d’abonnement sur son site officiel.
            </p>
          </div>
          <div className='flex justify-center flex-col py-3 md:py-10 text-center'>
            <span className='text-main font-semibold pb-3'>Pricing</span>
            <h1 className='font-bold text-xl md:text-3xl'>Choose the right plan for you</h1>
            {/* <p>Choose your plan today!</p> */}
          </div>
        </div>
        <div className='max-w-6xl mx-auto'>
          <Pricing bundles={bundles}/>
        </div>
        <div className='max-w-4xl mx-4 md:mx-auto pt-20'>
          <h2 className='text-center text-5xl font-bold pb-2'>FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
      </div>
    </Layout>
  )
}

export default Follow