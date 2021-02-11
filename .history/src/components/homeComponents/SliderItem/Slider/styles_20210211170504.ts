import styled from 'styled-components'

import { Carousel } from 'react-responsive-carousel'

export const StyedCarousel = styled(Carousel)`
  .control-prev:before {
    content: url($Iconpath + 'previous-arrow.svg') !important;
  }
`
