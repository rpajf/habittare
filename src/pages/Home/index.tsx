import Link from 'next/link'
import { useState } from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Carousel } from 'react-responsive-carousel'

import * as S from '../../styles/Home'

import SliderText from '../../components/homeComponents/SliderItem/SliderText'
import TextComp from '../../components/TextComp'

import MenuCard from '../../components/homeComponents/MenuCard'

import FindPropertyWithFilter from '../../components/homeComponents/FindPropertyWithFilter'

const Home: React.FC = () => {
  const links = [
    {
      name: 'imovel1',
      id: 1
    },
    {
      name: 'imovel2',

      id: 2
    },
    {
      name: 'imovel3',
      id: 3
    }
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  const next = () => {
    if (currentSlide === 1) return setCurrentSlide(0)
    return setCurrentSlide(currentSlide + 1)
  }

  const prev = () => {
    return setCurrentSlide(currentSlide - 1)
  }
  return (
    <S.Container>
      {/* <S.ImgBackground>
        <S.InnerDiv>
          <SliderText />
        </S.InnerDiv>
      </S.ImgBackground> */}
      <S.SliderContainer>
        <Carousel
          autoPlay={true}
          selectedItem={currentSlide}
          swipeable={true}
          emulateTouch={true}
          stopOnHover={true}
        >
          <S.ImgBackground
            style={{
              backgroundImage:
                'url("https://s01.jetimgs.com/trvAWQHuYcArjvEQrn0RZKS2Bhe0O8DO2AIZ-bQ3I8l5e-YQhf6FMkRTlRsXZu26thc1hC3G3A/1.jpg")'
            }}
          >
            <S.InnerDiv>
              <SliderText next={next} prev={prev} />
            </S.InnerDiv>
          </S.ImgBackground>
          <S.ImgBackground
            style={{
              backgroundImage:
                'url("https://s01.jetimgs.com/trvAWQHuYcArjvEQrn0RZKS2Bhe0O8DO2AIZ-bQ3I8l5e-YQhf6FMkRTlRsXZu26thc1hC3G3A/1.jpg")'
            }}
          >
            {links.forEach(link => (
              <Link href={`imoveis/${link.name}`} />
            ))}

            <S.InnerDiv>
              <SliderText next={next} prev={prev} />
            </S.InnerDiv>
          </S.ImgBackground>
        </Carousel>
      </S.SliderContainer>
      <S.Content>
        <S.MenuWrapper>
          <FindPropertyWithFilter />
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
