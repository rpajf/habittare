import styled from 'styled-components'

interface HeaderProps {
  isOpen: boolean
}
export const Container = styled.header<HeaderProps>`
  background: ${({ isOpen }) => (!isOpen ? '#5743D9' : 'none')};
`
export const HeaderContent = styled.div`
  max-width: 1440px;

  display: flex;
  padding: 25px 0px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 320px) and (max-width: 578px) {
  }
  @media (max-width: 320px) {
    display: flex;
  }
`
export const HomeTitle = styled.text`
  font-size: 36px;
  font-weight: 400;
  color: ${props => props.theme.colors.textPrimary};
  @media (min-width: 320px) and (max-width: 578px) {
    font-size: 22px;
  }
`
export const TitleWrapper = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  display: ${({ isOpen }) => (!isOpen ? 'flex' : 'none')};
`
export const SubTitle = styled.text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 10px;
  color: ${props => props.theme.colors.textPrimary};
  @media (min-width: 320px) and (max-width: 578px) {
    font-size: 10px;
    letter-spacing: 5px;
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 310px) and (max-width: 720px) {
    display: none;
  }
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuItem = styled.label`
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  position: relative;
  background: ${props => props.theme.colors.primary};
  border: none;
  cursor: pointer;
  ::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    margin-top: 3px;
    top: 100%;
    left: 0;
    background: #95a5a6;
    transition: transform 0.6s;
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

  @media (min-width: 310px) and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
    ::after {
      display: none;
    }
    :hover {
      ::after {
        transform: none;
      }
    }
  }
`
