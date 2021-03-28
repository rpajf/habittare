import React, { useRef, useState } from 'react'
import * as S from './styles'
import Burguer from '@/components/BurguerMenu/Burger'

import { useOnClickOutside } from '@/hooks/clickOutside'
import Menu from '@/components/BurguerMenu/Menu'

const Header: React.FC = () => {
  const [checked, setActive] = useState<boolean>(false)

  const node = useRef()
  const [isOpen, setOpen] = useState<boolean>(false)
  useOnClickOutside(node, () => setOpen(false))
  // const onClick = () => setOpen(!isOpen)

  return (
    <S.Container isOpen={isOpen}>
      <S.HeaderContent className="container mx-auto justify-around md:justify-between">
        <S.TitleWrapper isOpen={isOpen}>
          <S.HomeTitle>HABITTARE</S.HomeTitle>
          <S.SubTitle>IMOBILIARIA</S.SubTitle>
        </S.TitleWrapper>
        <S.HeaderMenu>
          <S.ItemWrapper>
            <S.MenuItem>Home</S.MenuItem>
          </S.ItemWrapper>

          <S.MenuItem>Sobre Nós </S.MenuItem>

          <S.MenuItem>Corretores </S.MenuItem>
          <S.MenuItem>Anuncie seu imovel </S.MenuItem>
          <S.MenuItem>Contato</S.MenuItem>
        </S.HeaderMenu>
      </S.HeaderContent>
      <Burguer isOpen={isOpen} setOpen={setOpen} />
      <Menu isOpen={isOpen} setOpen={setOpen} />
    </S.Container>
  )
}
export default Header
