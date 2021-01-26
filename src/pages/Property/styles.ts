import styled from 'styled-components'

import PrimaryButton from '../../components/Buttons/PrimaryBtn'
import SecondaryButton from '../../components/Buttons/SecondaryBtn'
export const Container = styled.div``
export const Content = styled.div`
  max-width: 789px;
  margin: 0 auto;
`
export const SliderArea = styled.div``
export const MainInfo = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 20px;
`
export const Title = styled.text`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;

  font-style: normal;
  font-size: 26px;
  line-height: 39px;
`
export const SubTitle = styled.text`
  color: ${props => props.theme.colors.primary};
  font-weight: 300;

  font-style: normal;
  font-size: 18px;
  line-height: 30px;
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 20px 15px 30px;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const InfoText = styled.text`
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
  justify-content: space-between;
`
export const InfoData = styled.text`
  font-style: normal;

  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #484848;
  :first-child {
    /* margin-left: -30px; */
  }
`
export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const InfoQuantity = styled.text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  color: ${props => props.theme.colors.primary};
`
