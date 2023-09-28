/* eslint-disable @next/next/no-img-element */
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

const Teams = () => {
  return (
    
    <div className="py-20">
    <div className="container mx-auto px-6 text-center md:px-12">
      <div className="mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          CantaveK blocks leadership
        </h2>
        <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
          Cantavek prides itself not only on award-winning technology, but also on the talent of its
          people of some of the brightest minds and most experienced executives in business.
        </p>
      </div>
      <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
          <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
            <img
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src="/IMG_8934-1.png"
              alt="Fredjy LOUIS"
              loading="lazy"
              width="640"
              height="805"
            />
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Fredjy LOUIS</h4>
              <span className="block text-sm text-gray-500">Directeur Général</span>
              {/* <span className="block text-sm text-gray-500">fredjylouis@cantavek.com</span> */}
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
  
        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
          <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
            <img
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src="/IMG_8934-1.png"
              alt="Fritz Berny Jean Baptiste"
              loading="lazy"
              width="1000"
              height="667"
            />
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Fritz Berny Jean Baptiste</h4>
              <span className="block text-sm text-gray-500">Directeur Artistique</span>
              {/* <span className="block text-sm text-gray-500">fritzberny@cantavek.com</span> */}
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
  
        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
          <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
            <img
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src="/IMG_8934-1.png"
              alt="Agathe MOISE"
              loading="lazy"
              width="1000"
              height="667"
            />
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h4 className="text-2xl  text-gray-700 dark:text-white">Agathe MOISE</h4>
              <span className="block text-sm text-gray-500">Secrétaire</span>
              {/* <span className="block text-sm text-gray-500">agathemoise@cantavek.com</span> */}
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
  </div>
                                      
  )
}

export default Teams