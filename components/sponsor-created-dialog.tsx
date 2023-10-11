import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Spinner from "./svgs/spinner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { sponsorSchema } from "@/validations"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

type Inputs = z.infer<typeof sponsorSchema>

const SponsorCreatedDialog = ({ currency, sponsorTypeId }: { currency: string, sponsorTypeId: string }) => {
  const [loading, setLoading] = useState(false)

  const form = useForm<Inputs>({
    resolver: zodResolver(sponsorSchema),
    defaultValues: {
      name: '',
      identity_link: '',
      link: ''
    },
  })

  const onSubmit = async (data: Inputs) => {
      console.log(data)
      setLoading(true)
      try{
        const res = await fetch(`/api/pay/${currency === 'usd' ? 'moncash' : 'stripe'}`,{
          method: 'POST',
          body: JSON.stringify({ type: 'sponsor', itemId: sponsorTypeId, ...data })
        })
        setLoading(false)
        if(res.status === 200) {
          const payemtResponse: {url?: string, message: string, error: boolean} = await res.json()
          if(payemtResponse.error === false && payemtResponse.url) {
            window.location.href = payemtResponse.url
          }
        }
      }catch(e){
        console.log(e, 'error')
        setLoading(false)
      }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        className={"w-full bg-[#be148e] rounded-3xl py-5"}>
          Sponsor us!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sponsor info</DialogTitle>
          <DialogDescription>
            Add info to know your identity. Click pay when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form 
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          className="grid gap-4 py-4">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <FormControl>
                  <Input  {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="identity_link"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="identity_link" className="text-right">
                  Logo or profile photo link
                </Label>
                <FormControl>
                  <Input  {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="link" className="text-right">
                  Link (website or a social media link)
                </Label>
                <FormControl>
                  <Input  {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <DialogFooter>
              <Button type="submit" disabled={loading}>
                {loading && (
                  <Spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Pay
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default SponsorCreatedDialog