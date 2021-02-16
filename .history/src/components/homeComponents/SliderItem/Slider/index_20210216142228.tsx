import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import { CSSProperties } from 'styled-components'
interface Props {
  axis: 'horizontal' | 'vertical'
  autoFocus?: boolean
  autoPlay?: boolean
  centerMode?: boolean
  centerSlidePercentage: number
  children?: React.ReactChild[]
  className?: string
  dynamicHeight?: boolean
  emulateTouch?: boolean
  infiniteLoop?: boolean
  interval: number
  labels: {
    leftArrow: string
    rightArrow: string
    item: string
  }
}
const arrowStyles: CSSProperties = {
  position: 'absolute',
  left: '83.32%';
right: '-45.82%';
top: '91.67%'';
bottom: '-75%'';
  zIndex: '2'
}

const Slider: React.FC<Props> = () => {
  return (
    <Carousel
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15 }}
          >
            -
          </button>
        )
      }
    >
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
