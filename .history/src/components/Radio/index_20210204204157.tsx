import React, { useState, useRef, FocusEvent } from 'react'
import * as S from './styles'

interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T
}
const Radio: React.FC = () => {
  const [values, setValues] = useState('')
  const radioRef = useRef<HTMLDivElement>()
  const radioValues = ['1', '2', '3', '4']
  const focus: FocusEvent = () => {
    // if (!radioRef.current) {
    //   return
    // }
    // radioRef.current.focus()
  }
  // const handleChange = (e: MouseEvent) => {
  //   if(e.)
  // }
  return (
    <S.Container ref={radioRef} onFocus={focus}>
      <S.QuantityInfo id="quantityRadio" type="radio" />

      <S.RadioLabel onClick={focus} htmlFor="quantityRadio">
        1
      </S.RadioLabel>
    </S.Container>
  )
}
export default Radio
