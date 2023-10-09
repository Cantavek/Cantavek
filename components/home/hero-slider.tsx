/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import Image from "next/image";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className="h-auto md:h-[27rem] w-full">
        <Image 
        src={'/75D32E30-23AF-4ACD-8AEF-9A2CCED70C3D.jpeg'}
        width={1300}
        height={512} 
        className="object-cover bg-skeleton"
        priority
        alt="" />
      </div>
      <div className="h-auto md:h-[27rem] w-full">
        <Image
        src={'/kal-visuals-V1b1YDaesD4-unsplash.jpg'} 
        width={1300}
        height={512}
        priority
        className="object-cover bg-skeleton"
        alt=""/>
      </div>
      <div className="h-auto md:h-[27rem] w-full">
        <Image 
        src={'/szabo-viktor-4QmSdCP4bhM-unsplash.jpg'}
        width={1300}
        height={512}
        priority
        className="object-cover bg-skeleton"
        alt="" />
      </div>
    </Slider>
  )
}

export default HeroSlider