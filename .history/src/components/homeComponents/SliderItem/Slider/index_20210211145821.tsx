import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import '../../../../pages/CarouselStyles.css'
interface CarouselProps {
  carousel: HTMLElement
}
const arrowStyles = {
  // position: 'absolute',
  top: '16px',

  padding: '.4em',
  zIndex: 5,
  color: 'pink'
}
const Slider: React.FC<CarouselProps> = (props: CarouselProps) => {
  return (
    <Carousel style={{ ...arrowStyles }} {...(props as any)}>
      <div>
        <Image
          src="/imgs/cosmos.jpg"
          alt="Picture of the author"
          width={1400}
          height={440}
        />
      </div>
      <div>
        <Image
          src="/imgs/cosmos.jpg"
          alt="Picture of the author"
          width={1400}
          height={440}
        />
      </div>
      <div>
        <Image
          src="/imgs/Moon.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </Carousel>
  )
}

export default Slider
