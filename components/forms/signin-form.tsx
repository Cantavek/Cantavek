
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
import { useRouter } from "next/router";
import { signInSchema } from "@/validations/auth";
import { useState } from "react";
import Spinner from "../svgs/spinner";
import { signIn } from 'next-auth/react';
import { useToast } from "../ui/use-toast";

type Inputs = z.infer<typeof signInSchema>

const SignInForm = ({ handleSubmit }: { handleSubmit: (section: any) => void}) => {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  async function onSubmit(data: Inputs) {
      console.log(data, 'data')
      setLoading(true)
      const signInReponse = await signIn('sanity-login', {
        redirect: false,
        email: data.email,
        password: data.password
      });
      console.log(signInReponse, 'signinResponse')
      if(signInReponse?.ok) handleSubmit('pay')

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
        <Button disabled={loading} >
          {loading && (
            <Spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Continue
          <span className="sr-only">Continue to email verification page</span>
        </Button>
      </form>
    </Form>
  )
}

export default SignInForm