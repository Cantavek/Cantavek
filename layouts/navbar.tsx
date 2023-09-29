import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, 
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { EnterIcon, HeartIcon, PersonIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
            <Image width={94} height={32} src="/logo.png" className="h-8 mr-3" alt="Cantavek Logo"/>
        </Link>
      <div className="flex md:order-2 space-x-3 items-center">
        <Button size={'lg'} asChild
        className="bg-main rounded-xl shadow-lg shadow-purple-500/50">
          <Link href={'/follow'}>
            <HeartIcon width={20} height={20} strokeWidth={2} className='mr-2'/>
              Follow
          </Link>
        </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative rounded-full p-0 h-full"
          >
            <Avatar className="h-10 w-10">
              <AvatarFallback>OL</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 rounded-lg" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                Oliver Jean Baptiste
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                oliver@gmail.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/account">
                  <PersonIcon
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Account
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/signout">
                <EnterIcon
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                />
                Log in
              </Link>
            </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
  {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div> */}
      </div>
    </nav>
  )
}

export default Navbar