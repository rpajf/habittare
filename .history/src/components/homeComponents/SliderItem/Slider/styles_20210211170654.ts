import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'

export const StyedCarousel = styled(Carousel)`
  .control-prev:before {
    content: url('/imgs/prevVector.svg') !important;
  }
`
