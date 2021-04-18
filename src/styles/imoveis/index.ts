import styled from 'styled-components'
import Button from '../../components/Buttons/PrimaryBtn'
import Radio from '../../components/Radio'
interface DisplayProps {
  isDisplayed: boolean
}

export const Container = styled.div`
  display: flex;
`
export const Content = styled.div<DisplayProps>`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 678px) {
    display: ${({ isDisplayed }) => (isDisplayed ? 'flex' : 'none')};
  }
`
export const Menu = styled.div`
  background: ${props => props.theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 0 10px 10px 8px;
`
export const MenuItensWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`
export const MenuOrganizer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 20px 0;
`
export const MenuBtn = styled.button`
  border: 1px solid #5743d9;

  border-radius: 5px;
  background: ${props => props.theme.colors.textPrimary};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  opacity: 0.8;
  line-height: 27px;
  color: ${props => props.theme.colors.primary};
  padding: 4px 10px 4px 10px;
  margin-right: 15px;
  :hover {
    opacity: 1;
    transition: 0.2s;
  }
`
export const ContentOrganizer = styled.div`
  display: flex;
  align-items: center;
`
export const ImoveisCard = styled.div`
  background: ${props => props.theme.colors.textPrimary};
`
export const Btn = styled(Button)`
  /* padding: 10px 20px 10px 20px; */
`

export const LabelOn = styled.label`
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 10px 20px 10px 20px;

  line-height: 24px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  cursor: pointer;
`
export const LabelOff = styled(LabelOn)`
  background: ${props => props.theme.colors.textPrimary};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`
export const MenuText = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-right: 10px;
  color: ${props => props.theme.colors.primary};
`
export const FilterText = styled(MenuText)`
  color: #000;
  text-align: center;
`
export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ImgDiv = styled.div`
  height: 264px;
  background: #cacaca;
  border-radius: 5px 0px 0px 5px;
  position: relative;
`
export const InnerContent = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
`

export const CardFooter = styled.div`
  height: 1px;
  max-width: 700px;
  background: #cacaca;
  margin-bottom: 15px;
`
export const SideNav = styled.div`
  background: ${props => props.theme.colors.textPrimary};
  margin-right: 20px;

  display: flex;
  flex-direction: column;

  border-radius: 5px;
  padding: 20px 16px 20px 10px;
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
  }
`
export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 15px 0;
`
