import { useRef, useState } from 'react'
import UnformInput from '@/components/UnformInput'
import * as S from './styles'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

interface FormData {
  name: string
}
const checkValues = ['whatsup', 'telefone']
const ContactForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = (data: FormData) => {
    console.log(data)
  }
  return (
    <S.Container className="mx-auto">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between">
          <label className="block w-full md:w-1/2 my-2 md:mx-2">
            <span className="text-gray-700">Nome</span>
            <UnformInput
              name="name"
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block w-full md:w-1/2 my-2 md:mx-2">
            <span className="text-gray-700">Sobrenome</span>
            <UnformInput
              name="lastName"
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <label className="block w-full md:w-1/2 my-2 md:mx-2">
            <span className="text-gray-700">Email</span>
            <UnformInput
              name="email"
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block w-full md:w-1/2 my-2 md:mx-2">
            <span className="text-gray-700">Telefone</span>
            <UnformInput
              name="phone"
              type="tel"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
        </div>
        <div className="">
          <label className="block w-full my-2 md:mx-2">
            <span className="text-gray-700">Como podemos lhe ajudar?</span>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={3}
            ></textarea>
          </label>
        </div>
        <div className="w-full my-2 md:mx-2">
          <S.SubmitButton type="submit" className="w-full">
            Enviar
          </S.SubmitButton>
        </div>
      </Form>
    </S.Container>
  )
}
export default ContactForm
