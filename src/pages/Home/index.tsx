import Link from 'next/link'
import { useState } from 'react'
import TextComp from '@/components/TextComp'

import MenuCard from '@/components/homeComponents/MenuCard'

import FindPropertyWithFilter from '@/components/homeComponents/FindPropertyWithFilter'

import * as S from '@/styles/Home'

import HomeCarousel from '@/components/HomeCarousel'

const Home: React.FC = () => {
  return (
    <S.Container>
      {/* <S.ImgBackground>
        <S.InnerDiv>
          <SliderText />
        </S.InnerDiv>
      </S.ImgBackground> */}
      <HomeCarousel />
      <div className="container">
        <FindPropertyWithFilter />
        <S.TitleDiv>
          <S.HeadText>Últimos imóveis</S.HeadText>
          <S.SubTitle>
            Encontre as ultimas casas à venda, notícias sobre imóveis e dados do
            mercado imobiliário
          </S.SubTitle>
          <S.MenuCardWrapper className="flex-col md:flex-row">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </S.MenuCardWrapper>

          <S.Button>Ver mais</S.Button>
        </S.TitleDiv>
      </div>
      <S.HeadText>
        Encontre seu imóvel <br />
        dos sonhos com apenas 1 clique
      </S.HeadText>
      <S.TextCompWrapper className="flex-col md:flex-row">
        <TextComp />
        <TextComp />
        <TextComp />
      </S.TextCompWrapper>
    </S.Container>
  )
}

export default Home
