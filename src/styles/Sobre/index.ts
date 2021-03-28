import styled from 'styled-components'

export const Container = styled.div``
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 50px auto;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  background: #e9eeef;
`

export const Title = styled.text`
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
  flex-direction: column;
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
`
