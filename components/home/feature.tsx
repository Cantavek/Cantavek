/* eslint-disable @next/next/no-img-element */

import { SpeakerLoudIcon, VideoIcon } from "@radix-ui/react-icons"

const Feature = () => {
  return (
    
    <div className="py-16">
    <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
      <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className="flex justify-center">
          <img
            src="/text-e1683216320973.png"
            alt="image"
            loading="lazy"
            width=""
            height=""
          />
        </div>
        <div className="md:7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            CANTAVE.K IN THE NEWS
          </h2>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
          </p>
          <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            <div className="mt-8 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                <SpeakerLoudIcon 
                width={24} height={24} 
                className="m-auto text-indigo-500 dark:text-indigo-400"/>       
              </div>
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">Comedy club</h4>
                <p className="text-gray-500 dark:text-gray-400">Cantave K lance son Comedy club</p>
              </div> 
            </div> 
            <div className="pt-4 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-red-100 dark:bg-red-900/20">  
                <VideoIcon width={24} height={24} className="m-auto text-red-600 dark:text-red-400"/>
                                                 
              </div>
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Videos</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Cantave-K lance une tournée de spectacles et d’ateliers humoristiques.
                </p>
              </div> 
            </div> 
            <div className="pt-4 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>                                      
              </div>
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Tournée de spectacles</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Cantave-K lance une tournée de spectacles et d’ateliers humoristiques.
                </p>
              </div> 
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
                                      
  )
}

export default Feature