import styled from 'styled-components'

interface BurguerProps {
  isOpen: boolean
}

export const Container = styled.div<BurguerProps>`
  background: #6a6a6a;

  @media (min-width: 568px) {
    display: none;
  }
  position: absolute;
  top: 2%;
  left: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;

    border-radius: 10px;
    /* transition: all 0.5s linear; */
    /* position: relative; */
    /* transform-origin: 1px; */
    /* :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
    } */
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const NavIcon = styled.span``
