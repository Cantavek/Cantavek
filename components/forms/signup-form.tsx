
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
import { signUpSchema } from "@/validations/auth";
import { useState } from "react";
import Spinner from "../svgs/spinner";
import { signUp } from 'next-auth-sanity/client';
import { signIn } from 'next-auth/react';
import { useToast } from "../ui/use-toast";

type Inputs = z.infer<typeof signUpSchema>

const SignUpForm = ({ handleSubmit }: { handleSubmit: (section: any) => void}) => {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<Inputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: "",
      password: "",
    },
  })


  async function onSubmit(data: Inputs) {
    setLoading(true)
    const user = await signUp(data);
    if(!!user && user?.email) {
      const signInReponse = await signIn('sanity-login', {
        redirect: false,
        email: data.email,
        password: data.password
      });
      if(signInReponse?.ok) handleSubmit('pay')
    }else{
      toast({
        description: (user as any)?.error as any || "User already exist",
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

export default SignUpForm