import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { useRouter } from 'next/router'
import { useState } from 'react'

import { Carousel } from 'react-responsive-carousel'

import * as S from './styles'

import SliderText from '@/components/homeComponents/SliderItem/SliderText'
import { PropertyType } from '@/models/Property'

interface HomeCarouselProps {
  properties: Array<PropertyType>
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ properties }) => {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  const next = () => {
    if (currentSlide === 1) return setCurrentSlide(0)
    return setCurrentSlide(currentSlide + 1)
  }

  const prev = () => {
    return setCurrentSlide(currentSlide - 1)
  }

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
          router.push(`/imoveis/${properties[e].codigo}`)
        }}
        showThumbs={false}
      >
        {properties.map(property => (
          <S.ImgBackground
            key={property.codigo}
            style={{
              backgroundImage: `url("${property.imagens[0].link}")`
            }}
          >
            <S.InnerDiv className="container mx-auto">
              <SliderText property={property} next={next} prev={prev} />
            </S.InnerDiv>
          </S.ImgBackground>
        ))}
      </Carousel>
    </div>
  )
}

export default HomeCarousel
