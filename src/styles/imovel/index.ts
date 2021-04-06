import styled from 'styled-components'
import PrimaryButton from '../../components/Buttons/PrimaryBtn'
import Input from '../../components/Input'
import SecondaryButton from '../../components/Buttons/SecondaryBtn'

export const Container = styled.div`
  background: #f3f4f7;
`
export const Content = styled.div`
  margin: 10px 15px 10px 0;
`
export const MainInfoWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 310px) and (max-width: 480px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`
export const SliderArea = styled.div``

export const MainInfo = styled.div`
  background: #fff;
  display: flex;
  padding: 20px;
  align-items: center;
  @media (min-width: 310px) and (max-width: 480px) {
    background: #fff;
    display: flex;
    flex-direction: column;
  }
`
export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;

  font-style: normal;
  font-size: 26px;
  line-height: 39px;

  text-transform: capitalize;
`
export const SubTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-weight: 300;

  font-style: normal;
  font-size: 18px;
  line-height: 30px;
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const InfoText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  color: #484848;
`
export const PrimaryBtn = styled(PrimaryButton)``
export const SecondaryBtn = styled(SecondaryButton)``
export const PropertyInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  @media (min-width: 310px) and (max-width: 480px) {
  }
`
export const InfoData = styled.p`
  font-style: normal;

  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #484848;
`

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 310px) and (max-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const InfoQuantity = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: ${props => props.theme.colors.primary};
`
export const ContentOrganizer = styled.div`
  display: flex;

  flex-wrap: wrap;
`
export const SideNav = styled.div`
  background: #fff;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 20px 16px;
  border-radius: 5px;
`
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputArea = styled.input`
  border: 1px solid #c4c4c4;
  flex: 1;
  padding: 10px 0px 10px 13px;
  margin: 5px 0 5px 0;
  outline: none;
  border-radius: 5px;
  color: #484848;
  ::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #c4c4c4;
  }
`
export const NavMainText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #484848;
`

export const TextFoot = styled.div`
  height: 1px;
  max-width: 720px;
  background: linear-gradient(to right, #5743d9 20%, #c4c4c4 0%);
  margin-bottom: 10px;
`
