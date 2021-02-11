import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import { pathToFileURL } from 'url'
import { url } from 'inspector'


const path = require()

export const StyedCarousel = styled(Carousel)`
  .control-prev:before {
    content: url('/imgs/prevVector.svg') !important;
  }
`
