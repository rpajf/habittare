import * as S from './styles'
interface HeaderProps {
  props?: HTMLElement
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Container>
      <S.HeaderContent>
        <S.HomeTitle>HABITTARE</S.HomeTitle>
        <S.SubTitle>Imo</S.SubTitle>
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
