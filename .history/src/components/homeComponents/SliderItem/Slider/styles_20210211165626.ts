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
  &.control-disabled {
    @include opacity(0);
    cursor: inherit;
    display: none;
  }

  &.control-prev {
    left: 0;
    &:before {
      border-right: 8px solid green;
    }
  }

  &.control-next {
    right: 0;
    &:before {
      border-left: 8px solid green;
    }
  }
`
