import styled, { keyframes, css } from 'styled-components'
import Radio from '@/components/Radio'

interface SideNavProps {
  isOpen: boolean
  setOpen: (newValue: boolean) => void
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
const disapear = keyframes`
  from{
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50px);

  }
`
// const openAnimation = css`
//   animation: 1s linear ${appearFromLeft} left;
// `
const closeAnimation = css`
  animation: 1s linear ${disapear} right;
`
export const Container = styled.div`
  display: flex;
`
export const SideNav = styled.div<SideNavProps>`
  background: ${props => props.theme.colors.textPrimary};
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  max-height: 760px;
  height: 100%;
  /* flex: 1; */
  border-radius: 0 5px 5px 5px;
  padding: 20px 16px 20px 10px;
  @media (max-width: 678px) {
    display: flex;
    position: absolute;
    z-index: 5;
    top: 140px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: all 0.3s ease-in-out;
    margin: 0;
    animation: ${appearFromLeft} 1s;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NavInfo = styled.text`
  font-style: normal;
  margin: 5px 0 5px 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #8a8a8a;
`
export const InnerNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 5px 0;
`
export const NavInput = styled.input`
  background: ${props => props.theme.colors.textPrimary};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  outline: none;
  padding: 9px 0 6px 6px;
  border: none;
  ::placeholder {
    color: #c9c9c9;
  }
`
export const QuantityInput = styled.input`
  background: ${props => props.theme.colors.textPrimary};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  max-width: 94px;
  padding: 9px 0 6px 6px;
  outline: none;
  border: none;
  ::placeholder {
    color: #c9c9c9;
  }
`
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImoveisRadio = styled(Radio)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  label {
    background: ${props => props.theme.colors.textPrimary};
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    padding: 6px;
    line-height: 18px;
    border-style: none;
    margin: 0;
    color: rgba(138, 138, 138, 0.5);
    :first-of-type {
      border-radius: 5px;
    }
    /* @media (max-width: 678px) {
      padding: 3px;
    } */
  }
`
export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 15px 0;
`
export const NavIcon = styled.span<SideNavProps>`
  display: none;
  @media (max-width: 678px) {
    transition: 0.4s;
    cursor: pointer;
    color: #000;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    align-items: center;
    justify-content: center;
    transition: left 0.5s linear;
    background: ${props => props.theme.colors.textPrimary};
    border-radius: 5px 5px 0 0;
    animation: ${appearFromLeft} 1s;
    padding: 5px 10px 15px 10px;
    width: 30px;
    height: 30px;
  }
`
export const SelectDiv = styled.div`
  background: ${props => props.theme.colors.textPrimary};
  border-radius: 5px;
  margin: 5px 0 5px 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  color: #8a8a8a;
  @media (max-width: 480px) {
    font-size: 8px;
    line-height: 0;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    flex: 1;
    border: 1px solid #8a8a8a;
  }
  select {
    padding: 0;
  }
`