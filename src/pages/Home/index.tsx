import { Container, TitleDiv, HeadText, SubTitle, Button } from './styles'
import Menu from '../../components/homeComponents/Menu'
import Slider from '../../components/homeComponents/SliderItem/Slider'
import SliderText from '../../components/homeComponents/SliderItem/SliderText'
import MenuCard from '../../components/homeComponents/MenuCard'
import Footer from '../../components/homeComponents/Footer'
const Home: React.FC = () => {
  return (
    <Container>
      <Slider />
      {/* <SliderText /> */}
      <Menu />
      <TitleDiv>
        <HeadText>Últimos imóveis</HeadText>
        <SubTitle>
          Encontre as ultimas casas à venda, notícias sobre <br /> imóveis e
          dados do mercado imobiliário
        </SubTitle>
        <MenuCard />
        <Button>Ver mais</Button>
      </TitleDiv>
      <Footer />
    </Container>
  )
}

export default Home
