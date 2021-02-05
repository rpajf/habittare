import React, { useState, useRef, SyntheticEvent, Nati } from 'react'
import * as S from './styles'
type NativeFocusEvent = FocusEvent
interface FocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> {
  relatedTarget: EventTarget | null
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
