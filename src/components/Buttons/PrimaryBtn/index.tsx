import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

const PrimaryButton: React.FC = ({ children, ...rest }) => {
  return <S.Container {...rest}>{children}</S.Container>
}
export default PrimaryButton
