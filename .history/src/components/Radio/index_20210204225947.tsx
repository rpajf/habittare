import React, { useState, useRef } from 'react'
import * as S from './styles'

export interface RadioProps {
  radioValue: string
  onClick: () => void
  checked: boolean
};

const Radio: React.FC<RadioProps> = ({ onClick, radioValue, checked }) => {

  return (
    <S.Container onClick={onClick}>
      <S.QuantityInfo id="quantityRadio" type="radio" />

      <S.RadioLabel htmlFor="quantityRadio">1</S.RadioLabel>
    </S.Container>
  )
}
export default Radio
