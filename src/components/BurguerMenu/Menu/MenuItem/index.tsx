import React from 'react'
import * as S from './styles'
import Link from 'next/link'

interface MenuItemProps {
  link: string
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ link, label }) => {
  return (
    <S.Container>
      <Link href={link}>{label}</Link>
    </S.Container>
  )
}
export default MenuItem
