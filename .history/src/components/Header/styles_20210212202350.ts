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
  background-color: ${props => props.theme.colors.textPrimary};
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
`
export const MenuItem = styled.button`
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  ::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    background: #ff7000;
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
  }
  :hover {
    color: #95a5a6;
    ::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  background: ${props => props.theme.colors.primary};
  border: none;
  ::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    background: #ff7000;
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
  }
  :hover {
    color: #95a5a6;
    ::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`
