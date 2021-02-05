import React, { useState, useRef } from 'react'
import * as S from './styles'

interface RadioProps {
  radioValue: string
  onClick: () => void
}
const Radio: React.FC<RadioProps> = ({ onClick, radioValue }) => {
  const [values, setValues] = useState('')
  const radioRef = useRef<HTMLInputElement>()
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
    <S.Container onClick={onClick}>
      <S.QuantityInfo ref={radioRef} id="quantityRadio" type="radio" />

      <S.RadioLabel htmlFor="quantityRadio">1</S.RadioLabel>
    </S.Container>
  )
}
export default Radio
