import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { useRouter } from 'next/router'
import { useState } from 'react'

import { Carousel } from 'react-responsive-carousel'

import * as S from './styles'

import SliderText from '@/components/homeComponents/SliderItem/SliderText'

const HomeCarousel: React.FC = () => {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  const next = () => {
    if (currentSlide === 1) return setCurrentSlide(0)
    return setCurrentSlide(currentSlide + 1)
  }

  const prev = () => {
    return setCurrentSlide(currentSlide - 1)
  }

  const mockedImoveis = [
    {
      id: 112312,
      name: 'imovel1',
      street: 'Rua Sao Joao',
      localization: 'Angelim - São Luis',
      size: 52,
      rooms: 2,
      baths: 2
    },
    {
      id: 21231231,
      name: 'imovel2',
      street: 'Rua Silva Costa',
      localization: 'Bequimao - São Luis',
      size: 10,
      rooms: 3,
      baths: 1
    }
  ]

  return (
    <div className="w-full">
      <Carousel
        autoPlay={true}
        selectedItem={currentSlide}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={true}
        statusFormatter={(current, total) => ''}
        onClickItem={e => {
          router.push(`/imoveis/${mockedImoveis[e].id}`)
        }}
        showThumbs={false}
      >
        {mockedImoveis.map(element => (
          <S.ImgBackground
            key={element.id}
            style={{
              backgroundImage:
                'url("https://s01.jetimgs.com/trvAWQHuYcArjvEQrn0RZKS2Bhe0O8DO2AIZ-bQ3I8l5e-YQhf6FMkRTlRsXZu26thc1hC3G3A/1.jpg")'
            }}
            // onClick={() => {
            //   router.push('/imoveis/1')
            // }}
          >
            <S.InnerDiv className="container mx-auto">
              <SliderText next={next} prev={prev} />
            </S.InnerDiv>
          </S.ImgBackground>
        ))}
      </Carousel>
    </div>
  )
}

export default HomeCarousel
