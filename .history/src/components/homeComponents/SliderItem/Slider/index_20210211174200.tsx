import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import './carousel.css'

interface CarouselProps {
  carousel: HTMLElement
}
interface CSSProperties extends CSS.Properties<string | number>
const arrowStyles: CSSProperties = {
  position: 'absolute',
  top: '.7em',
  bottom: 'auto',
  padding: '.4em',
  zIndex: 2
}
const Slider: React.FC<CarouselProps> = () => {
  return (
    <Carousel>
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
