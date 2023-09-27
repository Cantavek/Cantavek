import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import PaymentForm from '../forms/payment-form'

const PaymentCard = () => {

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Payment</CardTitle>
        <CardDescription>
          Choose your preferred sign in method
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <PaymentForm/>
      </CardContent>
    </Card>
  )
}

export default PaymentCard