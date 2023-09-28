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
        <div className='bg-cover bg-no-repeat' style={{ backgroundImage: 'url(/Bckground.svg)'}}>
          <Image
          width="800"
          height="312"
          className="responsive__img w-full max-w-full h-[19.5rem] object-cover"
          src={'/CK-picture-e1683215284632.png'}
          priority={true}
          alt={""}
        />
        </div>
        <div className='bg-cover bg-no-repeat' style={{ backgroundImage: 'url(/Bckground.svg)'}}>
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
    </section>
  )
}

export default Hero