import React, { useState } from 'react'
import * as S from './styles'

interface Props {
  radioValue: string
  // target: HTMLInputElement
}
const Radio: React.FC = () => {
  const [values, setValues] = useState('')
  const radioValues = ['1', '2', '3', '4']
  const onFocus = (e: React.ChangeEvent<HTMLAreaElement>) => {
    console.log(e)
  }

  // const handleChange = (e: MouseEvent) => {
  //   if(e.)
  // }
  return (
    <S.Container>
      <S.QuantityInfo id="quantityRadio" type="radio" />

      <S.RadioLabel htmlFor="quantityRadio">1</S.RadioLabel>
    </S.Container>
  )
}
export default Radio
