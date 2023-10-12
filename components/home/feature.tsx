/* eslint-disable @next/next/no-img-element */
import { BookmarkIcon, SpeakerLoudIcon, VideoIcon } from "@radix-ui/react-icons"
import LocationSvg from "../svgs/location"
import { Home } from "@/feature/sanity"
import { cn } from "@/lib/utils"
import Image from "next/image"

const Feature = ({ data }: { data: Home['feature']}) => {
  return (
    
    <div className="py-16">
    <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
      <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className="flex justify-center">
          <Image
            src={data.image}
            alt="image"
            className="object-contain rounded-xl"
            width={350}
            height={350}
          />
        </div>
        <div className="md:7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            {data.title}
          </h2>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            {data.description}
          </p>
          <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            {data.features.map((feature, i) => (
              <div className={cn("flex gap-4 md:items-center", { "mt-8": i === 0, 'pt-4': i !== 0 })} key={i}>
                {feature.icon === 'videos' ?
                <div className="w-12 h-12 flex gap-4 rounded-full bg-red-100 dark:bg-red-900/20">  
                  <VideoIcon width={24} height={24} className="m-auto text-red-600 dark:text-red-400"/>
                </div> :
                feature.icon === 'speaker' ? 
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                  <SpeakerLoudIcon width={24} height={24} className="m-auto text-indigo-500 dark:text-indigo-400"/>
                </div> :
                feature.icon === 'location' ?
                <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
                  <LocationSvg className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400" />
                </div> :
                <div className="w-12 h-12 flex gap-4 rounded-full bg-gray-100 dark:bg-gray-900/20"> 
                <BookmarkIcon className="w-6 h-6 m-auto text-gray-600 dark:text-gray-400"/> 
                </div> } 
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">{feature.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div> 
              </div> 
            ))}

          </div>
        </div>
      </div>
    </div>
  </div>
                                      
  )
}

export default Feature