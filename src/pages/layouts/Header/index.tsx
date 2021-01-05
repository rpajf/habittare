import {
  Container,
  HeaderContent,
  HomeTitle,
  HeaderMenu,
  MenuItem
} from './styles'
import HeaderProps from './interface'
interface Props {
  props: HeaderProps
}

const Header: React.FC<Props> = () => {
  return (
    <Container>
      <HeaderContent>
        <HomeTitle>HABITTARE</HomeTitle>
        <HeaderMenu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Sobre Nós</MenuItem>
          <MenuItem>Corretores</MenuItem>
          <MenuItem>Anuncie seu imovel</MenuItem>
          <MenuItem>Contato</MenuItem>
        </HeaderMenu>
      </HeaderContent>
    </Container>
  )
}
export default Header
