import Link from 'next/link'
import MenuItem from './MenuItem'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

interface MenuProps {
  isOpen: boolean
  setOpen: (newValue: boolean) => void
}
const BurguerMenu: React.FC<MenuProps> = ({ isOpen }) => {
  const [checked, setActive] = useState<boolean>(false)
  const handleClick = () => {
    setActive(!checked)
  }

  return (
    <S.Container isOpen={isOpen}>
      <MenuItem checked={checked} setChecked={handleClick}>
        Inicio
      </MenuItem>
      <MenuItem checked={checked} setChecked={handleClick}>
        Inicio
      </MenuItem>
      <MenuItem checked={checked} setChecked={handleClick}>
        Inicio
      </MenuItem>
      <MenuItem checked={checked} setChecked={handleClick}>
        Inicio
      </MenuItem>
    </S.Container>
  )
}
export default BurguerMenu
