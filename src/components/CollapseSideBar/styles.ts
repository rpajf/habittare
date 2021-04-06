import styled from 'styled-components'
interface SideNavProps {
  isOpen: boolean
}
export const Container = styled.div<SideNavProps>`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
`
export const Filter = styled.div`
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.primary};
  height: 30px;
  padding: 10px;
  flex: 1;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 450px;
  cursor: pointer;
`
