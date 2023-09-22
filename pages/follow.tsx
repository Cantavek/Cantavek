import Pricing from '@/components/pricing'
import Layout from '@/layouts'

const Follow = () => {
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
          <Pricing/>
        </div>
      </div>
    </Layout>
  )
}

export default Follow