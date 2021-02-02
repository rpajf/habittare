import * as S from './styles'
import Menu from '../../components/homeComponents/Menu'
import Slider from '../../components/homeComponents/SliderItem/Slider'
import SliderText from '../../components/homeComponents/SliderItem/SliderText'
import TextComp from '../../components/TextComp'
import { useRouter } from 'next/router'

import MenuCard from '../../components/homeComponents/MenuCard'

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.CardWrapper>
        <Slider />
      </S.CardWrapper>
      <S.Content>
        <Menu />
        <S.TitleDiv>
          <S.HeadText>Últimos imóveis</S.HeadText>
          <S.SubTitle>
            Encontre as ultimas casas à venda, notícias sobre imóveis e dados do
            mercado imobiliário
          </S.SubTitle>
        </S.TitleDiv>

        <S.CardWrapper>
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </S.CardWrapper>
        <S.HomeCompsWrapper>
          <S.Button>Ver mais</S.Button>

          <S.HeadText>
            Encontre seu imóvel <br />
            dos sonhos com apenas 1 clique
          </S.HeadText>
        </S.HomeCompsWrapper>
        <S.TextCompWrapper>
          <TextComp />
          <TextComp />
          <TextComp />
        </S.TextCompWrapper>
      </S.Content>
    </S.Container>
  )
}

export default Home
