import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { CheckCircledIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import MoncashSvg from '../svgs/moncash-svg'
import CreditCardSvg from '../svgs/credit-card-svg'
import Link from 'next/link'

const PaymentCard = () => {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Payment</CardTitle>
        <CardDescription>
          Choose your preferred sign in method
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          aria-label={`Sign in with`}
          variant="outline"
          className="w-full bg-background sm:w-auto flex-1"
        >
          
            <GitHubLogoIcon className="mr-2 h-4 w-4" aria-hidden="true" />
          Google
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Payment process
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <Button
            aria-label={`Sign in with`}
            variant="outline"
            className="w-full bg-background flex-1 justify-between"
          >
            <div className='flex items-center'>
              <MoncashSvg className="mr-2 h-8 w-11"/>
              Moncash
            </div>
            <CheckCircledIcon/>
          </Button>
          <Button
            aria-label={`Sign in with`}
            variant="outline"
            className="w-full bg-background flex-1 justify-between"
          >
            <div className='flex items-center'>
              <CreditCardSvg className='mr-1'/>
              Credit Card
            </div>
            <CheckCircledIcon/>
          </Button>
        </div>
        <Button disabled={false} className='w-full bg-main'>
          Follow
        </Button>
      </CardContent>
    </Card>
  )
}

export default PaymentCard