import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 0 60px 50px;
  margin: 0 auto;
  max-width: 1250px;
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* align-items: center;
  justify-content: space-around; */
`
export const HeadTextWrapper = styled.div`
  display: flex;

  margin: 10px 0 30px;
  flex-direction: column;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;

  color: ${props => props.theme.colors.primary};
`

export const ContentText = styled.text`
  font-style: normal;
  font-weight: normal;
  max-width: 650px;
  height: 400px;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`
export const SubTitle = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;

  line-height: 30px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`
export const ItalicText = styled.text`
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.primary};
`
export const ContactTitle = styled.text`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${props => props.theme.colors.primary};
`

export const FormContent = styled.div`
  display: flex;
`

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  /* margin: 0 auto; */
  align-items: center;
`
export const IconWrapper = styled.div`
  display: flex;
`
export const IconBorder = styled.div`
  height: 108px;
  width: 108px;
  margin: 0 15px 15px 15px;
  background: #cacaca;
  border-radius: 50%;
  align-self: center;
  border-color: #eddbfb;
  border-width: 16px;
  border-style: solid;
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -40px;
  max-width: 600px;
  width: 100%;
`
export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1050px;
  width: 100%;
`
export const HeadText = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin: 20px 0 25px 0;
  line-height: 38px;
  color: ${props => props.theme.colors.primary};
`
export const FooterSubtitle = styled.h3`
  font-size: 32px;
  line-height: 28px;
  font-weight: 300;
  color: ${props => props.theme.colors.primary};
  :first-child {
    margin-top: 10px;
  }
`
export const FooterText = styled.p`
  font-size: 18px;
  margin-top: 15px;
  line-height: 22px;
  color: ${props => props.theme.colors.primary};
`

export const MapDiv = styled.div`
  background: #cacaca;

  height: 300px;
  width: 300px;
  border-radius: 50%;
`
