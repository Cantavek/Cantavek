import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { contactSchema } from '@/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { useToast } from '../ui/use-toast'
import { useState } from 'react'
import { Button } from '../ui/button'
import Spinner from '../svgs/spinner'

type Inputs = z.infer<typeof contactSchema>

const ContactForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      name: '',
      budget: '',
      message: '',
    },
  })

  async function onSubmit(data: Inputs) {
    setLoading(true)
    const contactReponse = await await fetch(`/api/booking`,{
      method: 'POST',
      body: JSON.stringify(data)
    })
    if(contactReponse.ok) {
      const data = await contactReponse.json()
      if(data?.error) {
        toast({
          description: data.message,
          variant: 'destructive',
        }) 
      }
      toast({
        description: "Your request have been sent successfully we will contact you soon",
        variant: 'default',
      }) 
    }
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form 
      className="space-y-12 text-gray-600 dark:text-gray-300"
      onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="name">
                  What&apos;s your email ?
                </label>
                <FormControl>
                <Input
                className='w-full px-5 py-6 rounded-3xl' 
                placeholder="Your email" 
                required
                {...field}
                />
                </FormControl>
              </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
            <FormItem>
              <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="email">
                What&apos;s your name ?
              </label>
              <FormControl>
              <Input
              className='w-full px-5 py-6 rounded-3xl' 
              placeholder="Your email" 
              required
              {...field}
              />
              </FormControl>
            </FormItem>
            )}
            />
          </div>
        </div>
        <div className="space-y-2">
          <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
          <FormItem>
            <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="email">
              What&apos;s your phonenumber ?
            </label>
            <FormControl>
              <Input
              className='w-full px-5 py-6 rounded-3xl'
              placeholder='Enter your full phonenumber'
              required
              {...field}
              />
            </FormControl>
          </FormItem>
          )}
          />
        </div>
        <div className="space-y-2">
          <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="contact_form_budget">Budget</label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full h-full px-5 py-4 rounded-3xl">
                  <SelectValue placeholder="Select a budjet" />   
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$500 - $1500">$500 - $1500</SelectItem>
                  <SelectItem value="$1500 - $5000">$1500 - $5000</SelectItem>
                  <SelectItem value="$5000 - $10.000">$5000 - $10.000</SelectItem>
                  <SelectItem value="$10.000 - Beyond">$10.000 - Beyond</SelectItem>
                </SelectContent>
            </Select>
          </FormItem>
          )}
          />
        </div>
        <div className="space-y-2">
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
          <FormItem>
            <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="contact_form_message">Message</label>
            <FormControl>
              <Textarea
              required 
              rows={10}
              placeholder="Feel free to include all details"
              className='w-full px-5 py-6 rounded-3xl'
              {...field} 
              />
            </FormControl>
          </FormItem>
          )}
          />
          
        </div>
        <Button className='h-11 px-6 rounded-full w-full md:w-auto' disabled={loading} >
          {loading && (
            <Spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Send message
        </Button>
    </form>
  </Form>
  )
}

export default ContactForm