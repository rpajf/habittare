import { useRef, useState } from 'react'
import UnformInput from '@/components/UnformInput'
import UnformTextArea from '@/components/UnformTextArea'

import * as S from './styles'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

interface FormData {
  name: string
}
const checkValues = ['whatsup', 'telefone']
const MyForm: React.FC = ({ ...rest }) => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = (data: FormData) => {
    console.log(data)
  }
  return (
    <S.Container className="mx-auto" {...rest}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <S.NavMainText>Contato</S.NavMainText>
        <S.TextFoot />
        <UnformInput
          name="name"
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Nome"
          style={{ color: '#222' }}
        />

        <UnformInput
          name="email"
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="E-mail"
          style={{ color: '#222' }}
        />
        <UnformInput
          name="phone"
          type="tel"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Telefone"
          style={{ color: '#222' }}
        />
        <label>
          <UnformTextArea
            name="textarea"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Olá, estou interessado no Apt Condominio"
            rows={8}
            style={{ color: '#222' }}
          />
        </label>

        <S.SubmitButton type="submit" className="w-full">
          Agendar Visita
        </S.SubmitButton>
      </Form>
    </S.Container>
  )
}
export default MyForm
