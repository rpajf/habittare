import MenuItem from './MenuItem'
import React, { useState } from 'react'

import Link from 'next/link'
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
      <ul>
        <MenuItem link="/" label="Home" />
        <MenuItem link="/sobre-nos" label="Sobre Nós" />
        <MenuItem link="/" label="Anuncie seu imóvel" />
        <MenuItem link="/contato" label="Contato" />
      </ul>
    </S.Container>
  )
}
export default BurguerMenu
