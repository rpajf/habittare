import { useState } from 'react'

import * as S from './styles'

interface SelectBox {
  element?: HTMLSelectElement
}

const Select: React.FC<SelectBox> = () => {
  return (
    <S.SelectContainer>
      <select>
        <option selected disabled>
          Tipo de imovel
        </option>

        <option>Apartamento</option>
        <option>Casa</option>
      </select>
      <span />
    </S.SelectContainer>
  )
}
export default Select
export {}
