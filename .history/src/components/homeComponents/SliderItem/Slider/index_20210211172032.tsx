import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

import './carousel.css'
interface CarouselProps {
  carousel: HTMLElement
}

const Slider: React.FC<CarouselProps> = () => {
  return (
    <Carou>
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
    </Carou>
  )
}

export default Slider
