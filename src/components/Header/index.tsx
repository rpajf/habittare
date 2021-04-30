import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import * as S from './styles'
import Burguer from '@/components/BurguerMenu/Burger'

import { useOnClickOutside } from '@/hooks/clickOutside'
import Menu from '@/components/BurguerMenu/Menu'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Header: React.FC = () => {
  const [checked, setActive] = useState<boolean>(false)

  const node = useRef()
  const [isOpen, setOpen] = useState<boolean>(false)

  useOnClickOutside(node, () => setOpen(false))
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <S.Container
      isOpen={isOpen}
      className="flex flex-row justify-center items-center"
    >
      <S.HeaderContent
        className="container mx-auto justify-around md:justify-between"
        isOpen={isOpen}
      >
        <S.TitleWrapper>
          <Image
            src="/assets/logo-white.png"
            width={184}
            height={54}
            alt="Habittare Imobiliaria"
          />
        </S.TitleWrapper>
        <S.HeaderMenu>
          <S.MenuItem>
            <Link href="/">Home</Link>
          </S.MenuItem>

          <S.MenuItem>
            <Link href="/sobre-nos">Sobre Nós</Link>
          </S.MenuItem>

          <S.MenuItem>Anuncie seu imovel </S.MenuItem>

          <S.MenuItem>
            <Link href="/contato">Contato</Link>
          </S.MenuItem>
        </S.HeaderMenu>
      </S.HeaderContent>
      <Burguer isOpen={isOpen} setOpen={setOpen} />
      <Menu isOpen={isOpen} setOpen={setOpen} />
    </S.Container>
  )
}
export default Header
