import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import SignInForm from '../forms/signin-form'

const SignInCard = ({ handleSubmit, withFooter = true, nextSection }: { handleSubmit: (section: any) => void, withFooter?:boolean, nextSection: string }) => {
  return ( 
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SignInForm handleSubmit={handleSubmit} nextSection={nextSection}/>
      </CardContent>
      {withFooter && <CardFooter className="flex flex-wrap items-center space-x-2">
        <div className="flex-1 text-sm text-muted-foreground" onClick={() => handleSubmit('register')}>
          Don&apos;t have an account?{" "}
          <span
            aria-label="Sign up"
            className="text-primary underline-offset-4 transition-colors hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </div>
      </CardFooter>}
    </Card>
  )
}

export default SignInCard