import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <S.Container {...rest}>{children}</S.Container>
}
export default PrimaryButton
