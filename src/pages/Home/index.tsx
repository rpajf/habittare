import { Container, TitleDiv, HeadText, SubTitle } from './styles'
import Menu from '../../components/menu'
import Slider from '../../components/slider'
import SliderText from '../../components/SliderText'
const Home: React.FC = () => {
  return (
    <Container>
      <Slider />
      <SliderText />
      <Menu />
      <TitleDiv>
        <HeadText>Últimos imóveis</HeadText>
        <SubTitle>
          Encontre as ultimas casas à venda, notícias sobre o mundo imobiliário
        </SubTitle>
      </TitleDiv>
    </Container>
  )
}

export default Home
