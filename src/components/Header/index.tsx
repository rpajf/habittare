import React, { useRef, useState } from 'react'
import * as S from './styles'
import Burguer from '../BurguerMenu/Burger'

import { useOnClickOutside } from '../../hooks/clickOutside'
import Menu from '../BurguerMenu/Menu'
import Link from 'next/link'
interface HeaderProps {
  isOpen: boolean
}
const Header: React.FC = () => {
  const node = useRef()
  const [isOpen, setOpen] = useState(false)
  useOnClickOutside(node, () => setOpen(false))
  // const onClick = () => setOpen(!isOpen)
  return (
    <S.Container isOpen={isOpen}>
      <S.HeaderContent>
        <S.TitleWrapper isOpen={isOpen}>
          <S.HomeTitle>HABITTARE</S.HomeTitle>
          <S.SubTitle>IMOBILIARIA</S.SubTitle>
        </S.TitleWrapper>
        <S.HeaderMenu>
          <S.ItemWrapper>
            <Link href="/">
              <S.MenuItem>Home</S.MenuItem>
            </Link>
          </S.ItemWrapper>
          <Link href="/Sobre">
            <S.MenuItem>Sobre Nós </S.MenuItem>
          </Link>
          <S.MenuItem>Corretores </S.MenuItem>
          <S.MenuItem>Anuncie seu imovel </S.MenuItem>

          <Link href="/Contact">
            <S.MenuItem>Contato</S.MenuItem>
          </Link>
        </S.HeaderMenu>
      </S.HeaderContent>
      <Burguer isOpen={isOpen} setOpen={setOpen} />
      <Menu isOpen={isOpen} setOpen={setOpen} />
    </S.Container>
  )
}
export default Header
