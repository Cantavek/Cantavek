
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/password-input"
import { signInSchema } from "@/validations";
import { useEffect, useState } from "react";
import Spinner from "../svgs/spinner";
import { signIn, useSession } from 'next-auth/react';
import { useToast } from "../ui/use-toast";

type Inputs = z.infer<typeof signInSchema>

const SignInForm = ({ handleSubmit, nextSection }: { handleSubmit: (section: any) => void, nextSection: string }) => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const { status} = useSession()

  useEffect(() => {
    if(status === 'authenticated') {
      handleSubmit(nextSection)
    }
  }, [handleSubmit, nextSection, status])


  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  async function onSubmit(data: Inputs) {
      setLoading(true)
      const signInReponse = await signIn('sanity-login', {
        redirect: false,
        email: data.email,
        password: data.password
      });
      console.log(signInReponse, 'signinResponse')
      if(signInReponse?.ok) handleSubmit(nextSection)

      if(!signInReponse?.ok) {
        toast({
          description: signInReponse?.error,
          variant: 'destructive',
        }) 
      }

      setLoading(false)
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading || status === 'loading'} >
          {loading && (
            <Spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Continue
        </Button>
      </form>
    </Form>
  )
}

export default SignInForm