import { ContinueWithGoogleButton } from '@/components/continue-with-google-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Login() {
  return <Card>
    <CardHeader>
      <CardTitle className='font-bold text-3xl'>Login</CardTitle>
    </CardHeader>
    <CardContent>
      <ContinueWithGoogleButton />
    </CardContent>
  </Card>
}

export default Login