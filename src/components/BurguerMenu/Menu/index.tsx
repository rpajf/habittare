import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

interface MenuProps {
  isOpen: boolean
  setOpen: (newValue: boolean) => void
}

const BurguerMenu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <S.Container isOpen={isOpen}>
      <S.ShownMenuItens>Inicio</S.ShownMenuItens>
      <S.ShownMenuItens>Compra</S.ShownMenuItens>
      <S.ShownMenuItens>Alugar</S.ShownMenuItens>
      <S.ShownMenuItens>Contato</S.ShownMenuItens>
    </S.Container>
  )
}
export default BurguerMenu
