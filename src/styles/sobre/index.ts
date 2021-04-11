import styled from 'styled-components'

export const Container = styled.div`
  /* display: flex;

  max-width: 1100px;
  width: 100%;
  justify-content: space-around;
  margin-top: 50px;
  align-items: center;
  flex-direction: column; */
  display: flex;
  padding: 50px;
`
export const Content = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
`
export const HeadTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
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
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
`
export const FormContent = styled.div`
  display: flex;
`

export const SideContent = styled.div`
  display: flex;
  padding-top: 75px;
  flex-direction: column;
  justify-content: space-around;
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
  max-width: 600px;
  width: 100%;
  flex: 1;

  margin-top: 40px;
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
  line-height: 36px;
  font-weight: 300;
  /* margin: 20px 0 25px 0; */
  color: ${props => props.theme.colors.primary};
  :first-child {
    margin-top: 10px;
  }
`
export const FooterText = styled.p`
  font-size: 18px;
  line-height: 20px;
  color: ${props => props.theme.colors.primary};
`

export const MapDiv = styled.div`
  margin-top: 40px;
  height: 320px;
  width: 320px;
  border-radius: 50%;
`
