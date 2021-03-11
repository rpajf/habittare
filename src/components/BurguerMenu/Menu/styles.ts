import styled from 'styled-components'

interface MenuProps {
  isOpen: boolean
}
export const Container = styled.div<MenuProps>`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  /* background: #e9eeef; */
  background: ${props => props.theme.colors.primary};

  height: 60vh;
  @media (min-width: 568px) {
    display: none;
  }
`
export const ShownMenuItens = styled.label`
  font-size: 14px;
  font-weight: 400;
  /* color: #020202; */
  color: #fff;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`
