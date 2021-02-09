import {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback
} from 'react'
import { useField } from '@unform/core'
import * as S from './styles'

interface ComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}
const Input: React.FC<ComponentProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null) // da acesso ao elemento input na DOM
  const { fieldName, defaultValue, error, registerField } = useField(name)

  // const handleInputFocus = useCallback(() => {
  //   setIsFocused(true)
  // }, [])

  // const handleInputBlur = useCallback(() => {
  //   setIsFocused(false)

  //   setIsFilled(!!inputRef.current?.value)
  // }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <S.Container {...rest}>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </S.Container>
  )
}
export default Input
