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
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const HomeTitle = styled.text`
  font-size: 36px;
  font-weight: 400;
  color: ${props => props.theme.colors.textPrimary};
  @media (max-width: 480px) {
    font-size: 22px;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const SubTitle = styled.text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 10px;
  color: ${props => props.theme.colors.textPrimary};
`
export const Line = styled.div`
  background-color: #fff;
  align-self: center;
  height: 2px;
  width: 7px;
  @media (max-width: 480px) {
    display: none;
  }
`
export const HeaderMenu = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ::visited
`
export const MenuItem = styled.button`
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primary};
  border: none;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`
