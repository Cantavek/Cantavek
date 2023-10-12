import { Sponsor } from "@/feature/sanity"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Sponsors = ({ sponsors }: { sponsors: Sponsor[] }) => {
  return (
    <div className="py-8">
      <div className="sm:max-w-5xl pt-3 rounded-xl bg-white mx-4 sm:mx-8 md:mx-auto">
        <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
          <h1 className="focus:outline-none xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pt-4">
            Donors, Partners & Sponsors
          </h1>
          <p className='pt-2 font-semibold text-base text-gray-700 text-center'>
            Here at cantaveK we focus on markets where technology, innovation, and capital can unlock long-term value.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-3">
          {sponsors.map((sponsor, i) => (
            <a
            href={'/'}
            key={i}
            target="_blank"
            aria-label={`${sponsor.name} identity link`}
            className="w-3/12 sm:w-1/6 flex flex-col justify-center xl:pb-10 pb-8 items-center inset-0 transform  hover:scale-125 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
              <Image 
              width={65} 
              height={63} 
              className="focus:outline-none w-16 rounded-full" 
              src={sponsor.logo}
              alt={sponsor.name} 
              role="img" />
              <span className='font-semibold text-center text-sm text-gray-600'>{sponsor.name}</span>
            </a>
          ))}
        </div>

        <div className="flex justify-center items-center">
            <Button asChild className="bg-main rounded-2xl">
              <Link href={'/sponsoring'} className="font-semibold">Become a sponsor</Link>
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Sponsors