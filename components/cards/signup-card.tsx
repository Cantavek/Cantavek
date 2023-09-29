import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import SignUpForm from '../forms/signup-form'

const SignUpCard = ({ handleSubmit }: { handleSubmit: (section: any) => void}) => {
  return ( 
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign up</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SignUpForm handleSubmit={handleSubmit} />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center space-x-2">
        <div className="flex-1 text-sm text-muted-foreground" onClick={() => handleSubmit('login')}>
          Already have an account?{" "}
          <span
            aria-label="Sign in"
            className="text-primary underline-offset-4 transition-colors hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default SignUpCard