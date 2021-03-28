import { useRef, useState } from 'react'

import * as S from '@/styles/Contato/Form'

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
    <S.Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <S.FieldWrapper>
          <S.InputField name="nome" placeholder="Nome" />
          <S.InputField name="sobrenome" placeholder="Sobrenome" />
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.InputField name="email" placeholder="E-mail" />
          <S.InputField name="phone" placeholder="DDD + Telefone" />
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.InputField name="nome" placeholder="Selecionar um Departamento" />
          <S.CheckBoxDiv>
            <S.FormOrganizer>
              <S.FormText>Desejo receber contato por:</S.FormText>
              <S.LabelWrapper>
                <label>
                  <S.CheckBox type="checkBox" value="whatsup" />
                  whatsup
                </label>
                <label>
                  <S.CheckBox type="checkBox" value="whatsup" />
                  Telefone
                </label>
              </S.LabelWrapper>
            </S.FormOrganizer>
          </S.CheckBoxDiv>
        </S.FieldWrapper>
        <S.InputArea name="contact" placeholder="Como podemos ajudar?" />
      </Form>
      <S.SubmitButton>ENVIAR</S.SubmitButton>
    </S.Container>
  )
}
export default ContactForm
