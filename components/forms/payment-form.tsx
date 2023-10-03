import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import MoncashSvg from '../svgs/moncash-svg'
import { Button } from '../ui/button'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import CreditCardSvg from '../svgs/credit-card-svg'
import { z } from 'zod'
import { paymentSchema } from '@/validations/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import Spinner from '../svgs/spinner'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { useRouter } from 'next/router'
import { Bundle } from '@/feature/sanity'

type Inputs = z.infer<typeof paymentSchema>

const PaymentForm = ({ bundles}: { bundles: Bundle[] }) => {
  const router = useRouter()
  const defaultBundle = (router.query?.bundle as string)
  const defaultPaymentType = (router.query?.payment_type as 'moncash' | 'stripe') || "moncash"
  const [loading, setLoading] = useState(false)

  const form = useForm<Inputs>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      bundle: defaultBundle,
      payment_type: defaultPaymentType,
    },
  })


  async function onSubmit(data: Inputs) {
      console.log(data, 'data')
      setLoading(true)
      try{
        const res = await fetch(`/api/pay/${data.payment_type}`,{
          method: 'POST',
          body: JSON.stringify({ bundle: data.bundle })
        })
        const payemtResponse: {url?: string, message: string, error: boolean} = await res.json()
        if(payemtResponse.error === false && payemtResponse.url) {
          window.location.href = payemtResponse.url
        }
      }catch(e){
        console.log(e, 'error')
        setLoading(false)
      }
  }

  return (
     <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
          control={form.control}
          name="bundle"
          render={({ field, formState }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full h-full">
                  <SelectValue placeholder="Basic" />    
                </SelectTrigger>
                <SelectContent>
                  {bundles.map((bundle) => (
                    <SelectItem value={bundle._id} key={bundle._id}>
                      <div className='flex flex-col items-start'>
                        <span className='font-semibold text-sm text-gray-700'>{bundle.name}</span>
                        <span className='text-gray-700'>
                          {form.getValues('payment_type') === 'moncash' ? `${bundle.price_gdes} HTG` : `$${bundle.price_usd}`} for {bundle.duration} months
                        </span>
                      </div>
                  </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
            )}
          />
        
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
        <FormField
        control={form.control}
        name="payment_type"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center">
                  <FormControl className='hidden'>
                    <RadioGroupItem value="moncash" />
                  </FormControl>
                  <FormLabel className="font-normal w-full">
                    <Button
                      aria-label={`Pay with moncash`}
                      variant="outline"
                      className="w-full bg-background flex-1 justify-between cursor-pointer"
                      size={'lg'}
                      asChild
                    >
                      <div>
                        <div className='flex items-center'>
                          <MoncashSvg className="mr-2 h-8 w-11"/>
                          Moncash
                        </div>
                        {field.value === 'moncash' && <CheckCircledIcon/>}
                      </div>
                    </Button>
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center">
                  <FormControl  className='hidden'>
                    <RadioGroupItem value="stripe" />
                  </FormControl>
                  <FormLabel className="font-normal w-full">
                    <Button
                      aria-label={`Pay with credit card`}
                      variant="outline"
                      className="w-full bg-background flex-1 justify-between cursor-pointer"
                      asChild
                      size={'lg'}
                    >
                      <div>
                        <div className='flex items-center'>
                          <CreditCardSvg className='mr-1'/>
                          Credit Card
                        </div>
                        {field.value === 'stripe' && <CheckCircledIcon/>}
                      </div>
                    </Button>
                  </FormLabel>
                </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}  
        />
        <Button disabled={loading} type='submit' className='w-full bg-main'>
          {loading && (
            <Spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Follow
        </Button>
      </form>
    </Form>
  )
}

export default PaymentForm