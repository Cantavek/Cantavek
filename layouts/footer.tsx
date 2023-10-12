/* eslint-disable @next/next/no-img-element */

import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return ( 
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" className="-mb-0.5 w-full" viewBox="0 0 1367.743 181.155">
        <path
          className="fill-current text-gray-100 dark:text-gray-800"
          id="wave"
          data-name="wave"
          d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
          transform="translate(1.743 66.155)"
        ></path>
      </svg>
      <div className="bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent pt-1">
        <div className="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-12 lg:px-20">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3">
              <div
                className="flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0"
              >
                <Image width={100} height={42} src="/logo.png" className="w-32 mr-3" alt="Cantavek Logo"/>
                <div className="flex gap-6">
                  <a href="#" target="blank" aria-label="github" className="hover:text-cyan-600">
                    <InstagramLogoIcon width="20" height="20"/>
                  </a>
                  <a href="#" target="blank" aria-label="twitter" className="hover:text-cyan-600">
                    <TwitterLogoIcon width="20" height="20"/>
                  </a>
                  <a href="#" target="blank" aria-label="medium" className="hover:text-cyan-600">
                    <LinkedInLogoIcon width="20" height="20"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="flex items-center justify-end space-x-4 pb-14  md:pl-16">
                <div>
                  <Link href="/about" className="text-base font-medium text-gray-600 dark:text-gray-200">
                    About
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="text-base font-medium text-gray-600 dark:text-gray-200">
                    Contact
                  </Link>
                </div>
                <div>
                  <Link href="/privacy" className="text-base font-medium text-gray-600 dark:text-gray-200">
                    Privacy policy
                  </Link>
                </div>
              </div>
              <div className="flex justify-between border-t border-gray-100 dark:border-gray-800 py-4 pb-8 md:pl-16">
                <span>&copy; cantavek {(new Date()).getFullYear()} - All right reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>                                   
  )
}

export default Footer