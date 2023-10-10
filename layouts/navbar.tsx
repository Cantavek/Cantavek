import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { EnterIcon, ExitIcon, HeartIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import { useSession,  signOut } from 'next-auth/react';
import dynamic from 'next/dynamic';
const BundleDrawer = dynamic(() => import('./bundle-drawer'))

const Navbar = () => {
  const { status, data } = useSession()

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-[200]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
            <Image width={94} height={32} src="/logo.png" priority className="h-8 mr-3" alt="Cantavek Logo"/>
        </Link>
        <div className="flex md:order-2 space-x-3 items-center">
          {!data?.user ?
          <Button size={'lg'} asChild
          className="bg-main rounded-xl shadow-lg shadow-purple-500/50">
            <Link href={'/follow'}>
              <HeartIcon width={20} height={20} strokeWidth={2} className='mr-2'/>
                Follow
            </Link>
          </Button> :
          <BundleDrawer/>}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative rounded-full p-0 h-full"
            >
              <Avatar className="h-10 w-10">
                <AvatarFallback>{!!data?.user ? data.user.name.substring(0, 2) : 'UK'}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 rounded-lg z-[210]" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              {status === 'unauthenticated' ? <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  No user
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  You should: 
                </p>
              </div> : 
              <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {data?.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {data?.user.email}
              </p>
            </div>}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              {status === 'authenticated' ? 
                <Button 
                variant={'ghost'} 
                className='w-full justify-start hover:border-none hover:outline-none'
                onClick={() => signOut()}
                >
                  <ExitIcon
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                  />
                  Logout
                </Button>
              :<Link href="/login" className='cursor-pointer'>
                <EnterIcon
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                />
                Log in
              </Link>}
            </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar