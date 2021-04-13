import styled, { keyframes } from 'styled-components'

interface MenuProps {
  isOpen: boolean
}

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`
export const Container = styled.div<MenuProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  flex-direction: column;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};

  -webkit-transition: bottom 1s ease-in-out, background-color 1s ease-out 1s;
  transition: bottom 1s ease-in-out, background-color 1s ease-out 1s;
  animation: ${appearFromLeft} 1.5s;
  @media (min-width: 628px) {
    display: none;
  }
`
export const ShownMenuItens = styled.label`
  font-size: 16px;
  line-height: 2;
  padding-bottom: 10px;
  font-weight: 500;
  /* color: #020202; */

  color: #5743d9;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`
