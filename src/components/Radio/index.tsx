import React from 'react'
import * as S from './styles'

export type RadioProps = {
  radioValue: string
  onClick: (newValue: string) => void
  checked: boolean
}

const Radio: React.FC<RadioProps> = ({ onClick, radioValue, checked }) => {
  return (
    <S.Container>
      <S.QuantityInfo id="quantityRadio" type="radio" />

      <S.RadioLabel
        checked={checked}
        htmlFor="quantityRadio"
        onClick={() => {
          onClick(radioValue)
        }}
      >
        {radioValue}
      </S.RadioLabel>
    </S.Container>
  )
}
export default Radio
export {}
