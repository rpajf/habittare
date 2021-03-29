import { GetServerSideProps } from 'next'

import Link from 'next/link'
import { useState } from 'react'

import TextComp from '@/components/TextComp'

import PropertyCard from '@/components/homeComponents/PropertyCard'

import FindPropertyWithFilter from '@/components/homeComponents/FindPropertyWithFilter'

import { PropertyType } from '@/models/Property'

import * as S from '@/styles/Home'

import HomeCarousel from '@/components/HomeCarousel'
import ContactForm from '@/components/Form'

import {
  getHomePageProperties,
  getLatestProperties
} from '@/services/properties'

export const getServerSideProps: GetServerSideProps = async () => {
  const sliderProperties = await getHomePageProperties()
  const latestProperties = await getLatestProperties()

  return {
    props: {
      sliderProperties: JSON.parse(JSON.stringify(sliderProperties)),
      latestProperties: JSON.parse(JSON.stringify(latestProperties))
    }
  }
}

interface HomeProps {
  sliderProperties: Array<PropertyType>
  latestProperties: Array<PropertyType>
}

const Home: React.FC<HomeProps> = ({ sliderProperties, latestProperties }) => {
  return (
    <S.Container>
      <HomeCarousel properties={sliderProperties} />
      <div className="container">
        <FindPropertyWithFilter />
        <S.TitleDiv>
          <S.HeadText>Últimos imóveis</S.HeadText>
          <S.SubTitle>
            Encontre as ultimas casas à venda, notícias sobre imóveis e dados do
            mercado imobiliário
          </S.SubTitle>

          <S.PropertyCardWrapper className="flex-col md:flex-row">
            {latestProperties.map((property: PropertyType) => (
              <PropertyCard key={property.codigo} property={property} />
            ))}
          </S.PropertyCardWrapper>

          <Link href="/imoveis">
            <S.Button>Ver mais</S.Button>
          </Link>
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
      <div className="container my-6">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3 md:text-4xl font-bold mb-5 text-gray-600">
            Como podemos ajudar?
          </h1>
          <h3 className="text-md mb-5 font-light">
            A Habittare disponibilida diversons canais de comunicação para
            oferecer um atendimento ágil e de qualidade. Quer solicitar uma
            consultaria? Receber opções de imóveis para alugar ou comprar?
            Preencha o formulário abaixo e envie sua mensagem!
          </h3>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          </div>
        </div>
        <ContactForm />
      </div>
    </S.Container>
  )
}

export default Home
