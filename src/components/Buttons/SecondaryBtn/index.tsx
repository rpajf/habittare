import { ReactNode } from 'react'
import * as S from './styles'
interface ButtonProps {
  children: ReactNode
}

const SecondaryButton: React.FC<ButtonProps> = props => {
  const { children } = props
  return <S.Container>{children}</S.Container>
}
export default SecondaryButton
