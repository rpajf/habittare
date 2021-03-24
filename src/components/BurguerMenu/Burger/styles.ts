import styled from 'styled-components'

interface BurguerProps {
  isOpen: boolean
}

export const Container = styled.div<BurguerProps>`
  background: #6a6a6a;

  position: absolute;
  top: 3.5%;
  left: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;

    border-radius: 10px;

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
    @media (min-width: 568px) {
      display: none;
    }
  }
  @media (min-width: 320px) and (max-width: 420px) {
    top: 3%;
    left: 280px;
  }
`

export const NavIcon = styled.span<BurguerProps>`
  transition: 0.4s;
  color: ${({ isOpen }) => (isOpen ? '#000' : '#fff')};
`
