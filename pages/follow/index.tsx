import Pricing from '@/components/pricing'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getAllBundle, getFaqs } from '@/feature/sanity'
import Layout from '@/layouts'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  const bundles = await getAllBundle()
  const faqs = await getFaqs()

  return { props: { bundles, faqs }, revalidate: 14400 }
}

const Follow = ({ bundles, faqs }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            {faqs.map((faq) => (
              <AccordionItem value={faq._key} key={faq._key}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.question}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
      </div>
    </Layout>
  )
}

export default Follow