import styled from 'styled-components'
import Radio from '@/components/Radio'
interface SideNavProps {
  isOpen: boolean
  setOpen: (newValue: boolean) => void
}

export const SideNav = styled.div<SideNavProps>`
  background: #fff;
  margin-right: 20px;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  max-height: 900px;
  /* left: ${({ isOpen }) => (isOpen ? '0' : '-100')}; */
  /* position: fixed; */
  transition: 350ms;
  height: 100%;
  border-radius: 5px;
  padding: 20px 16px 20px 10px;
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
  background: #ffffff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 9px 0 6px 6px;
  border: none;
  ::placeholder {
    color: #c9c9c9;
  }
`
export const QuantityInput = styled.input`
  background: #ffffff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  max-width: 94px;
  padding: 9px 0 6px 6px;
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
    background: #ffffff;
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
  }
`
export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 15px 0;
`
export const NavIcon = styled.span<SideNavProps>`
  cursor: pointer;
  color: ${({ isOpen }) => (isOpen ? '#000' : '#fff')};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`
