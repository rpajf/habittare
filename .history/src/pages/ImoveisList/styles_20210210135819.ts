import styled from 'styled-components'
import Button from '../../components/Buttons/PrimaryBtn'
import Radio from '../../components/Radio'

export const Container = styled.div`
  display: flex;
`
export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  /* display: flex; */

  /* margin: 0 30px 0 180px; */
`
export const Menu = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 12px 10px 10px 8px;
`
export const MenuItens = styled.div`
  display: flex;
`
export const MenuOrganizer = styled.div`
  /* display: flex; */
`
export const MenuBtn = styled.button`
  border: 1px solid #5743d9;

  border-radius: 5px;
  $color
`
export const ContentOrganizer = styled.div`
  display: flex;
  align-items: center;
`
export const ImoveisCard = styled.div`
  background: #fff;
`
export const Btn = styled(Button)`
  padding: 10px 20px 10px 20px;
`

export const LabelOn = styled.label`
  background: #5743d9;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  flex-wrap: wrap;
  line-height: 24px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
`
export const LabelOff = styled(LabelOn)`
  background: #fff;
  color: ${props => props.theme.colors.primary};
`
export const MenuText = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #5743d9;
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
  background: #fff;
  margin-right: 20px;

  display: flex;
  flex-direction: column;

  border-radius: 5px;
  padding: 20px 16px 20px 10px;
`
export const NavInfo = styled.text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #8a8a8a;
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
