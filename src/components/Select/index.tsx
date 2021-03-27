import { useState } from 'react'

import * as S from './styles'

interface SelectBox {
  element?: HTMLSelectElement
}

const Select: React.FC<SelectBox> = () => {
  return (
    <S.SelectContainer className="w-full">
      <select defaultValue="" className="w-full">
        <option disabled value="">
          Tipo de imovel
        </option>

        <option value="apt">Apartamento</option>
        <option value="house">Casa</option>
      </select>
      <span />
    </S.SelectContainer>
  )
}
export default Select
export {}
