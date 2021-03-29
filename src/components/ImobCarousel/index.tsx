import * as S from './styles'
import { PropertyImageType } from '@/models/Property'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

interface ImobCarouselProps {
  imagens: Array<PropertyImageType>
}
const ImobCarousel: React.FC<ImobCarouselProps> = ({ imagens }) => {
  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    // showThumbs: boolean('showThumbs', true, tooglesGroupId),
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 2000,
    transitionTime: 500,
    swipeScrollTolerance: 5
  })

  return (
    <Carousel
      autoPlay={true}
      swipeable={true}
      emulateTouch={true}
      stopOnHover={true}
      showThumbs={false}
      infiniteLoop
      centerMode
      centerSlidePercentage={60}
      {...getConfigurableProps()}
    >
      {imagens.map((image, index) => (
        <S.ImobImg key={index} src={image.link} alt={image.alt} />
      ))}
    </Carousel>
  )
}

export default ImobCarousel
