import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import './styles.css'
interface CarouselProps {
  carousel: HTMLElement
}

const Slider: React.FC = () => {
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
