/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="mb-16">
      <div className='hidden md:block'>
        <Image
          width="1024"
          height="500"
          className="responsive__img w-full max-w-full h-[26rem] object-cover"
          src={'/Rectangle-2.png'}
          priority={true}
          alt={""}
        />
      </div>
      <div className='flex flex-col md:hidden'> 
        <div className='relative'>
          <Image 
          width={800} 
          height={312} 
          src='/Bckground.svg' 
          priority
          className='absolute top-0 bottom-0 left-0 right-0 h-full' 
          alt=''/>
            
          <div style={{ position: 'inherit' }}>
            <Image
              width="800"
              height="312"
              className="responsive__img w-full max-w-full h-[19.5rem] object-cover"
              src={'/CK-picture-e1683215284632.png'}
              priority={true}
              alt={""}
              />
          </div>
        </div>
        <div className='relative'>
          <Image 
          width={800} 
          height={312} 
          src='/Bckground.svg' 
          className='absolute top-0 bottom-0 left-0 right-0 h-full' 
          priority
          alt=''/>
          <div style={{ position: 'inherit' }}>
            <Image
            width="800"
            height="300"
            priority={true}
            className="responsive__img w-full max-w-full h-64 object-contain"
            src={'/text-e1683216320973.png'}
            alt={""}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero