import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import SignInForm from '../forms/signin-form'

const SignInCard = ({ handleSubmit }: { handleSubmit: (section: any) => void}) => {
  return ( 
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SignInForm handleSubmit={handleSubmit} />
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
      </CardFooter>
    </Card>
  )
}

export default SignInCard