import { Container, TitleDiv, HeadText, SubTitle } from './styles'
import Menu from '../../components/homeComponents/Menu'
import Slider from '../../components/homeComponents/Slider'
import SliderText from '../../components/homeComponents/SliderText'
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
