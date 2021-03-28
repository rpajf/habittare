import { ReactNode } from 'react'
import * as S from './styles'
interface ComponentProps {
  children: ReactNode
  content: string
}
const InfoTextComp: React.FC<ComponentProps> = props => {
  const { children, content } = props
  return (
    <S.Container>
      <S.MainText>{content}</S.MainText>
      <S.TextFoot />
      {children}
    </S.Container>
  )
}
export default InfoTextComp
