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
          <S.MenuItem>Home</MenuItem>
          <Line />
          <MenuItem>Sobre Nós </MenuItem>
          <Line />
          <MenuItem>Corretores </MenuItem>
          <Line />
          <MenuItem>Anuncie seu imovel </MenuItem>
          <Line />

          <MenuItem>Contato</MenuItem>
        </HeaderMenu>
      </HeaderContent>
    </Container>
  )
}
export default Header
