import { Form } from '@unform/web'
import Input from '../Input'
export default function SignIn() {
  function handleSubmit(data) {
    console.log(data)
    // { email: 'test@example.com', password: '123456' }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="email" />

      <button type="submit">Sign in</button>
    </Form>
  )
}
