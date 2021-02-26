import { useState } from 'react'
import Image from 'next/image'

import * as S from '../../styles/Home'

import Menu from '../../components/homeComponents/Menu'
import Slider from '../../components/homeComponents/SliderItem/Slider'
import SliderText from '../../components/homeComponents/SliderItem/SliderText'
import TextComp from '../../components/TextComp'

import MenuCard from '../../components/homeComponents/MenuCard'
const Home: React.FC = () => {
  return (
    <S.Container>
      <S.SliderBackgroud />

      <S.ImgBackground>
        <Image
          src="/imgs/cosmos.jpg"
          alt="Picture of the author"
          layout="intrinsic"
          width={1200}
          height={400}
        />
        <SliderText/
      </S.ImgBackground>
      <S.Content>
        <S.MenuWrapper>
          <Menu />
        </S.MenuWrapper>

        <S.TitleDiv>
          <S.HeadText>Últimos imóveis</S.HeadText>
          <S.SubTitle>
            Encontre as ultimas casas à venda, notícias sobre imóveis e dados do
            mercado imobiliário
          </S.SubTitle>
          <S.MenuCardWrapper>
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </S.MenuCardWrapper>

          <S.Button>Ver mais</S.Button>
        </S.TitleDiv>
      </S.Content>
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
