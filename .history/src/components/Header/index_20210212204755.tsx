import * as S from './styles'
import Link from 'next/link'

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
          <S.ItemWrapper>
              <S.MenuItem>
              <Link href="/">

                Home</S.MenuItem>

          </S.ItemWrapper>
          <Link href="/Sobre">
            <S.MenuItem>Sobre Nós </S.MenuItem>
          </Link>
          <S.MenuItem>Corretores </S.MenuItem>
          <S.MenuItem>Anuncie seu imovel </S.MenuItem>

          <Link href="/Contact">
            <S.MenuItem>Contato</S.MenuItem>
          </Link>
        </S.HeaderMenu>
      </S.HeaderContent>
    </S.Container>
  )
}
export default Header
