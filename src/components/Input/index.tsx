import React, { InputHTMLAttributes, useCallback } from 'react'

import { currency } from './masks'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: 'currency'
  prefix?: string
}

const Input: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'currency') {
        currency(e)
      }
    },
    [mask]
  )

  return (
    <S.Container>
      {prefix && <S.InnerSpan>{prefix}</S.InnerSpan>}
      <input {...props} onKeyUp={handleKeyUp} />
    </S.Container>
  )
}

export default Input
