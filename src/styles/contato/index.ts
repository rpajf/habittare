import styled from 'styled-components'

// export const Container = styled.div``

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 310px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px 0 15px;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  justify-content: center;

  @media (min-width: 310px) and (max-width: 480px) {
    align-items: center;
    justify-content: center;
  }
`

export const Title = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  line-height: 54px;

  color: ${props => props.theme.colors.primary};
  @media (min-width: 310px) and (max-width: 480px) {
    font-size: 20px;
    text-align: center;
    line-height: 32px;
  }
`

export const ContentText = styled.text`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`
export const SubTitle = styled.text`
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  @media (min-width: 310px) and (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  }
`

export const SideTittle = styled.text`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  color: ${props => props.theme.colors.primary};
  margin-bottom: 15px;
  @media (min-width: 310px) and (max-width: 480px) {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
`
export const FormContent = styled.div`
  display: flex;
`

export const SideTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  @media (min-width: 310px) and (max-width: 480px) {
    margin-bottom: 30px;
  }
`
export const SideContent = styled.text`
  font-size: 16px;
  color: #000;
  line-height: 24px;
  @media (min-width: 310px) and (max-width: 480px) {
    font-size: 12px;
    text-align: center;
  }
`
