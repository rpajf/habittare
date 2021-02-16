import {
  Container,
  HeaderContent,
  HomeTitle,
  HeaderMenu,
  MenuItem,
  Line
} from './styles'
interface HeaderProps {
  props?: HTMLElement
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <HeaderContent>
        <HomeTitle>HABITTARE</HomeTitle>
        <HeaderMenu>
          <MenuItem>Home</MenuItem>
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
