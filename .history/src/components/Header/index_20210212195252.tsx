import * as S from './styles'
interface HeaderProps {
  props?: HTMLElement
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Container>
      <S.HeaderContent>
        <S.HomeTitle>HABITTARE</S.HomeTitle>
        <S.>
        <S.HeaderMenu>
          <S.MenuItem>Home</S.MenuItem>
          <S.Line />
          <S.MenuItem>Sobre Nós </MenuItem>
          <S.Line />

          <MenuItem>Corretores </MenuItem>
          <S.Line />

          <MenuItem>Anuncie seu imovel </MenuItem>
          <S.Line />


          <MenuItem>Contato</MenuItem>
        </HeaderMenu>
      </HeaderContent>
    </Container>
  )
}
export default Header
