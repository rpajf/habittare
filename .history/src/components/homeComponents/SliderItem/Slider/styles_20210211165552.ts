import styled from 'styled-components'

import { Carousel } from 'react-responsive-carousel'

export const StyedCarousel = styled(Carousel)`
  scrollbar-arrow-color: pink;
  &.control-arrow {
    &:before {
      margin: 0 100px;
      display: inline-block;
      border-top: 8px solid blue;
      border-bottom: 8px solid blue;
      content: '';
    }
  }
`
