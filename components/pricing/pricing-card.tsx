import { cn } from '@/lib/utils'
import { CheckIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props{
  name: string
  price: string
  accesses: string[]
  selected?: boolean
  popular?: boolean
  onClick: () => void
  link: string
}

const PricingCard = ({ name, price, accesses, onClick, link, selected = false, popular = false }: Props) => {
  return (
    <div onClick={onClick} className={cn("relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border", { "border-purple-500": selected })}>
      {popular && <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Popular
      </div>}
      <div className='w-full'>
        <h3 className="text-2xl font-bold text-center">{name}</h3>
        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-4xl font-bold">{price}</span>/ month
        </div>
        <ul className="my-7 space-y-2">
          {accesses.map((access, i) => (
            <li className="flex items-center space-x-1" key={i}>
              <CheckIcon className='text-pink-500' width={24} height={24}/>
              <span>{access}</span>
            </li>
          ))}
      
        </ul>
      </div>
      <div className="mt-6 w-full">
        <Button 
        asChild
        className={cn("w-full", { "bg-gradient-to-r from-pink-500 to-purple-500": selected })}>
          <Link href={link}>
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default PricingCard