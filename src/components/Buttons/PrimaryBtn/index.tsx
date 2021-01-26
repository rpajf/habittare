import { ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps {
  children: ReactNode
}

const PrimaryButton: React.FC<ButtonProps> = props => {
  const { children } = props
  return <S.Container>{children}</S.Container>
}
export default PrimaryButton
