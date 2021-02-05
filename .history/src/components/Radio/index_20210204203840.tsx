import React, { useState, useRef } from 'react'
import * as S from './styles'

interface Props {
  radioValue: string
  // target: HTMLInputElement
}
const Radio: React.FC = () => {
  const [values, setValues] = useState('')
  const radioRef = useRef<HTML>()
  const radioValues = ['1', '2', '3', '4']
  const focus = () => {
    if (!radioRef.current) {
      return
    }
    radioRef.current.focus()
    radioRef.current.nodeValue = ''
  }
  // const handleChange = (e: MouseEvent) => {
  //   if(e.)
  // }
  return (
    <S.Container ref={radioRef}>
      <S.QuantityInfo id="quantityRadio" type="radio" />

      <S.RadioLabel onClick={focus} htmlFor="quantityRadio">
        1
      </S.RadioLabel>
    </S.Container>
  )
}
export default Radio
