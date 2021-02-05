import { InputHTMLAttributes, useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import * as S from './styles'

interface ComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}
const Input: React.FC<ComponentProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null) // da acesso ao elemento input na DOM
  const { fieldName, defaultValue, error, registerField } = useField(name)
  useEffect(() => {
    registerField({ 
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <S.Container>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </S.Container>
  )
}
export default Input
