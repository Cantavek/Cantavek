import React from 'react'
import { HomeIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const BreadCrumbs = () => {
  return (
    <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href={'/'} 
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-pink-600 dark:text-gray-400 dark:hover:text-white">
            <HomeIcon className="w-3.5 h-3.5 mr-2.5"/>
            Home
          </Link>
        </li>
        {/* <li>
          <div className="flex items-center">
            <ChevronRightIcon strokeWidth={2} width={24} height={24} className="mx-1 text-gray-400"/>
            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Templates</a>
          </div>
        </li> */}
        <li aria-current="page">
          <div className="flex items-center">
          <ChevronRightIcon strokeWidth={2} width={24} height={24} className="mx-1 text-gray-400"/>
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">About</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumbs