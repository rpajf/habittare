import styled from 'styled-components'

import PrimaryButton from '../../components/Buttons/PrimaryBtn'
import SecondaryButton from '../../components/Buttons/SecondaryBtn'
export const Container = styled.div``
export const Content = styled.div`
  max-width: 789px;
  margin: 0 auto;
`
export const MainInfoWrapper = styled.div`
  max-width: 789px;
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

  /* @media (min-width: 310px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  } */
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
  @media (min-width: 310px) and (max-width: 480px) {
    flex-direction: column;
  }
`
export const InfoData = styled.text`
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
export const InfoQuantity = styled.text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  color: ${props => props.theme.colors.primary};
`
