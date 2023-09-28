/* eslint-disable @next/next/no-img-element */
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const Teams2 = () => {
  return (
    
    <div className="bg-gray-50 dark:bg-gray-800 py-20">
    <div className="xl:container mx-auto px-6 md:px-12">
      <div className="mb-28">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Tailus blocks leadership
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
          Tailus prides itself not only on award-winning technology, but also on the talent of its
          people of some of the brightest minds and most experienced executives in business.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        <div className="group space-y-4 text-center">
          <div
            className="mx-auto h-40 w-40 rotate-45 overflow-hidden rounded-[4rem] md:h-32 md:w-32 lg:h-40 lg:w-40"
          >
            <img
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src="/IMG_8934-1.png"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
          </div>
          <div className="pt-4">
            <h4 className="text-2xl text-gray-700 dark:text-white">Hentoni Doe</h4>
            <span className="block text-sm text-gray-500">CEO-Founder</span>
          </div>
          <div className="flex justify-center space-x-4 text-gray-500">
            <a href="#" target="_blank" aria-label="instagram">
              <InstagramLogoIcon width={24} height={24}/>
            </a>
            <a href="#" target="_blank" aria-label="instagram">
              <TwitterLogoIcon width={24} height={24}/>
            </a>
            <a href="#" target="_blank" aria-label="instagram">
              <LinkedInLogoIcon width={24} height={24}/>
            </a>
          </div>
        </div>
        <div className="group space-y-4 text-center">
          <div
            className="mx-auto h-40 w-40 rotate-45 overflow-hidden rounded-[4rem] md:h-32 md:w-32 lg:h-40 lg:w-40"
          >
            <img
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src="/IMG_8934-1.png"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
          </div>
          <div className="pt-4">
            <h4 className="text-2xl text-gray-700 dark:text-white">Dan Orton</h4>
            <span className="block text-sm text-gray-500">Designer</span>
          </div>
          <div className="flex justify-center space-x-4 text-gray-500">
            <a href="#" target="_blank" aria-label="instagram">
              <InstagramLogoIcon width={24} height={24}/>
            </a>
            <a href="#" target="_blank" aria-label="instagram">
              <TwitterLogoIcon width={24} height={24}/>
            </a>
            <a href="#" target="_blank" aria-label="instagram">
              <LinkedInLogoIcon width={24} height={24}/>
            </a>
          </div>
        </div>
        <div className="group space-y-4 text-center">
          <div
            className="mx-auto h-40 w-40 rotate-45 overflow-hidden rounded-[4rem] md:h-32 md:w-32 lg:h-40 lg:w-40"
          >
            <img
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src="/IMG_8934-1.png"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
          </div>
          <div className="pt-4">
            <h4 className="text-2xl  text-gray-700 dark:text-white">Ortance Doe</h4>
            <span className="block text-sm text-gray-500">Marketing</span>
          </div>
          <div className="flex justify-center space-x-4 text-gray-500">
            <a href="#" target="_blank" aria-label="instagram">
              <InstagramLogoIcon width={24} height={24}/>
            </a>
            <a href="#" target="_blank" aria-label="instagram">
              <TwitterLogoIcon width={24} height={24}/>
            </a>
            <a href="#" target="_blank" aria-label="instagram">
              <LinkedInLogoIcon width={24} height={24}/>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
                                      
  )
}

export default Teams2