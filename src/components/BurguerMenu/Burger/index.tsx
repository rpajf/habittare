import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

interface BurguerProps {
  isOpen: boolean
  setOpen: (newValue: boolean) => void
}

const BurguerMenu: React.FC<BurguerProps> = ({ isOpen, setOpen, ...props }) => {
  return (
    <S.Container isOpen={isOpen} onClick={() => setOpen(!isOpen)} {...props}>
      {isOpen ? (
        <S.NavIcon>
          <FontAwesomeIcon icon={faTimes} />
        </S.NavIcon>
      ) : (
        <S.NavIcon>
          <FontAwesomeIcon icon={faBars} />
        </S.NavIcon>
      )}
    </S.Container>
  )
}
export default BurguerMenu
