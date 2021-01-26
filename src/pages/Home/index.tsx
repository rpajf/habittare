import * as S from './styles'
import Menu from '../../components/homeComponents/Menu'
import Slider from '../../components/homeComponents/SliderItem/Slider'
import SliderText from '../../components/homeComponents/SliderItem/SliderText'
import TextComp from '../../components/TextComp'

import MenuCard from '../../components/homeComponents/MenuCard'
// const Redirect = ({ to }) => {
//   const router = useRouter()
//   useEffect(() => {
//     router.push(to)
//   }, [to])
//   return null
// }
const Home: React.FC = () => {
  // const [shouldRedirect, setShouldRedirect] = useState(false)
  // if (shouldRedirect) {
  //   return <Redirect to="property" />
  // }
  return (
    <S.Container>
      <S.CardWrapper>
        <Slider />
      </S.CardWrapper>
      <S.CardWrapper>
        <Menu />
      </S.CardWrapper>

      <S.TitleDiv>
        <S.HeadText>Últimos imóveis</S.HeadText>
        <S.SubTitle>
          Encontre as ultimas casas à venda, notícias sobre imóveis e dados do
          mercado imobiliário
        </S.SubTitle>
        <S.CardWrapper>
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </S.CardWrapper>

        <S.Button>Ver mais</S.Button>
      </S.TitleDiv>
      <S.HeadText>
        Encontre seu imóvel <br />
        dos sonhos com apenas 1 clique
      </S.HeadText>
      <S.TextCompWrapper>
        <TextComp />
        <TextComp />
        <TextComp />
      </S.TextCompWrapper>
    </S.Container>
  )
}

export default Home
