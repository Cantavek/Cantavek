import SignUpForm from '@/components/forms/signup-form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const Buy = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/Cantekcomedyclub_93-min_50-scaled.jpg"
          alt="A skateboarder doing a high drop"
          priority
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
        <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" className="absolute left-8 top-8 h-8 mr-3" alt="Cantavek Logo"/>
        </Link>
        
      </AspectRatio>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        <section className={ "container max-w-lg grid items-center gap-8 pb-8 pt-6 md:py-8"}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            {/* <CardDescription>
              Choose your preferred sign in method
            </CardDescription> */}
          </CardHeader>
          <CardContent className="grid gap-4">
            {/* <OAuthSignIn /> */}
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div> */}
            <SignUpForm />
          </CardContent>
          <CardFooter className="flex flex-wrap items-center space-x-2">
            <div className="flex-1 text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                aria-label="Sign up"
                href="/auth/signup"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                Sign up
              </Link>
            </div>
            {/* <Link
              aria-label="Reset password"
              href="/auth/reset-password"
              className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
            >
              Reset password
            </Link> */}
          </CardFooter>
        </Card>
        </section>
      </main>
    </div>
  )
}

export default Buy