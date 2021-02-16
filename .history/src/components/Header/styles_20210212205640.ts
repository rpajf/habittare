import styled from 'styled-components'
import Link from 'next/link'

const styledLink = styled.a`
  text-decoration: none;
`


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
  @media (min-width: 310px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const HomeTitle = styled.text`
  font-size: 36px;
  font-weight: 400;
  color: ${props => props.theme.colors.textPrimary};
  @media (min-width: 310px) and (max-width: 480px) {
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
// export const Line = styled.div`
//   background-color: ${props => props.theme.colors.textPrimary};
//   align-self: center;
//   height: 2px;
//   width: 7px;
//   @media (max-width: 480px) {
//     display: none;
//   }
// `
export const HeaderMenu = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 310px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  label {
    :visited {
      color: #95a5a6;
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
