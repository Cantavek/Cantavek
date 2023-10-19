import ContactForm from '@/components/forms/contact-form'
import { getBookingType } from '@/feature/sanity'
import Layout from '@/layouts'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const data = await getBookingType()

  return { props: { data }, revalidate: 14400 }
}

const Contact = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout showVideoButton={true}>
      <div className="">
        <div className="relative z-10 w-full">
          <div className="relative mx-auto pt-16 mb-16 px-6 md:max-w-2xl lg:max-w-5xl lg:px-12">
            <div className="mx-auto text-center lg:w-4/5">
              <div className="mt-20 relative">
                <h1 className="text-[2.5rem] leading-9 font-black text-blue-950 dark:text-white md:text-6xl lg:text-7xl">
                  Let&apos;s build a unique <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-secondary">experience.</span>
                </h1>
                <p className="relative z-[11] mt-14 text-gray-600 dark:text-gray-300 md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat architecto ad error perspiciatis et. Sint rerum, quibusdam, doloremque adipisci repellendus illo non, eum commodi cumque eaque autem ad sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="md:pt-6 border-b border-gray-100 dark:border-gray-800">
        <div className="mx-auto mb-16 px-6  md:max-w-2xl lg:max-w-5xl lg:px-12">
          <div className="mt-10 mx-auto lg:w-3/5">
            <ContactForm data={data}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact