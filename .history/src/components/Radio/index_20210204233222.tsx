import React, { useState, useRef } from 'react'
import * as S from './styles'

export type RadioProps = {
  radioValue: string
  onClick: (newValue: string) => void
  checked: boolean
}

const Radio: React.FC<RadioProps> = ({ onClick, radioValue, checked }) => {
  console.log()
  return (
    <S.Container
      onClick={() => {
        onClick(radioValue)
      }}
    >
      <S.QuantityInfo id="quantityRadio" type="radio" />

      <S.RadioLabel checked={checked} htmlFor="quantityRadio">
        {{ radioValue }}
      </S.RadioLabel>
    </S.Container>
  )
}
export default Radio
