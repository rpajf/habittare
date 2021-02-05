import React, { useState, useRef } from 'react'
import * as S from './styles'

interface Props {
  radioValue: string
}
const Radio: React.FC = () => {
  const [values, setValues] = useState('')
  const radioRef = useRef<HTMLLabelElement>()
  const radioValues = ['1', '2', '3', '4']
  const focus = () => {
    if (!radioRef.current) {
      return
    }
    radioRef.current.focus()
  }
  // const handleChange = (e: MouseEvent) => {
  //   if(e.)
  // }
  return (
    <S.Container>
      <S.QuantityInfo ref={radioRef} id="quantityRadio" type="radio" />

      <S.RadioLabel htmlFor="quantityRadio">1</S.RadioLabel>
      <button onClick={focus}></button>
    </S.Container>
  )
}
export default Radio
