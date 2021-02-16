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
  // position: 'absolute',
  // top: '.7em',
  // bottom: 'auto',
  // padding: '10px',
  // zIndex: 2,
  width: '0',
  height: '0',
  borderTop: 50px solid transparent;
  border-right: 100px solid red;
  border-bottom: 50px solid transparent;
  backgroundColor: '#5743D9'
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
