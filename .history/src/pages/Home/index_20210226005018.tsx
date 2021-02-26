import { useState } from 'react'

import * as S from '../../styles/Home'

import Menu from '../../components/homeComponents/Menu'
import Slider from '../../components/homeComponents/SliderItem/Slider'

import TextComp from '../../components/TextComp'

import MenuCard from '../../components/homeComponents/MenuCard'
const Home: React.FC = () => {
  return (
    <S.Container>
        <S.SliderBackgroud />
      <S.CardWrapper>
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
export {}
