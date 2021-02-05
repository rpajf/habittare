
import { Form } from '@unform/web'
import Input from '
export default function SignIn() {
  function handleSubmit(data) {
    console.log(data)
    // { email: 'test@example.com', password: '123456' }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="email" />
      <Input name="password" type="password" />
      <button type="submit">Sign in</button>
    </Form>
  )
}
