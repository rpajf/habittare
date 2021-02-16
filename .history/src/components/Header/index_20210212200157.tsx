import * as S from './styles'
import Link form 'next/l'
interface HeaderProps {
  props?: HTMLElement
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Container>
      <S.HeaderContent>
        <S.TitleWrapper>
          <S.HomeTitle>HABITTARE</S.HomeTitle>
          <S.SubTitle>IMOBILIARIA</S.SubTitle>
        </S.TitleWrapper>
        <S.HeaderMenu>
          <S.MenuItem>Home</S.MenuItem>
          <S.Line />
          <S.MenuItem>Sobre Nós </S.MenuItem>
          <S.Line />

          <S.MenuItem>Corretores </S.MenuItem>
          <S.Line />

          <S.MenuItem>Anuncie seu imovel </S.MenuItem>
          <S.Line />
          <S.MenuItem>Contato</S.MenuItem>
        </S.HeaderMenu>
      </S.HeaderContent>
    </S.Container>
  )
}
export default Header
