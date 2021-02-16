import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
const Slider: React.FC = () => {
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
            -
        </button>
    )
}
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
