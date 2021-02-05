import React, { useState, useRef } from 'react'
import * as S from './styles'

interface Props {
  radioValue: string
  // target: HTMLInputElement
}
const Radio: React.FC = () => {
  const [values, setValues] = useState('')
  const radioRef = useRef<Radi>()
  const radioValues = ['1', '2', '3', '4']
  const focus = () => {
    radioRef.current.value = ''
    radioRef.current.focus()
  }

  // const handleChange = (e: MouseEvent) => {
  //   if(e.)
  // }
  return (
    <S.Container>
      <S.QuantityInfo id="quantityRadio" type="radio" />

      <S.RadioLabel onClick={focus} htmlFor="quantityRadio">
        1
      </S.RadioLabel>
    </S.Container>
  )
}
export default Radio
