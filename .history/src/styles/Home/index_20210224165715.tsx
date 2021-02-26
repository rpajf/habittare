import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  background: #e9eeef;

  display: flex;
  /* margin: 0 180px 0 180px; */
  flex-direction: column;
  align-items: center;
`
export const MenuWrapper = styled.div`
  display: flex;
  background
`
export const CardWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`

export const SliderBackgroud = styled.div`

`
export const SliderImg = styled(Image)`
  max-width: 1400
`

export const Content = styled.div``
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0 45px 0;
`
export const HeadText = styled.text`
  font-weight: 600;
  font-size: 26px;
  color: #5743d9;
  text-align: center;
  line-height: 39px;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`
export const TextCompWrapper = styled.div`
  display: flex;

  justify-content: space-around;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`
export const SubTitle = styled.text`
  font-weight: 300;
  font-size: 18px;
  color: #5743d9;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`
export const Button = styled.button`
  align-self: center;
  max-width: 115px;
  margin: 25px 0 25px 0;
  border: none;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 10px 12px 10px 12px;
  font-weight: 400;
  color: #fff;
  font-size: 18px;
`
export {}
