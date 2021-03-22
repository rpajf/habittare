import React, { ReactNode, useState } from 'react'
import * as S from './styles'
interface ItemProps {
  setChecked: (newValue: boolean) => void

  checked: boolean
  children: string
}

const MenuItem: React.FC<ItemProps> = ({ checked, setChecked, children }) => {
  return (
    <S.Container checked={checked} onClick={() => setChecked(!checked)}>
      {children}
    </S.Container>
  )
}
export default MenuItem
