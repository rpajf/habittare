import styled from 'styled-components'
export const Container = styled.header`
  background: ${props => props.theme.colors.primary};
`
export const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 184px 0 184px;
  display: flex;
  padding: 25px 0px;
  align-items: center;
  justify-content: space-between;
`
export const HomeTitle = styled.text`
  font-size: 36px;
  font-weight: 400;
  color: ${props => props.theme.colors.textPrimary};
`
export const HeaderMenu = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-space-between;
`
export const MenuItem = styled.button`
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primary};
  border: none;
`
