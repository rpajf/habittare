import React from 'react'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Slider: React.FC = () => {
  return (
    <Carousel showArrows={true} showThumbs={true}>
      <div>
        <Image
          src="/imgs/cosmos.jpg"
          alt="Picture of the author"
          width={1400}
          height={440}
        />
        <Image
          src="/imgs/cosmos.jpg"
          alt="Picture of the author"
          width={1400}
          height={440}
        />
      </div>
    </Carousel>
  )
}
export default Slider
