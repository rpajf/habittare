import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import { pathToFileURL } from 'url'
import { url } from 'inspector'
import prevArrow from '../../../../../public/imgs/prevVector.svg'

export const StyedCarousel = styled(Carousel)`
  .control-prev:before {
    content: url('../../../../../public/imgs/prevVector.svg') !important;
  }
`
