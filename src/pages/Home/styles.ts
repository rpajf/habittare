import styled from 'styled-components'
export const Container = styled.div`
  background: #e9eeef;

  display: flex;

  flex-direction: column;
`
export const MenuWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`
export const CardWrapper = styled.div`
  display: flex;
  margin: 0 auto;
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
`
export const TextCompWrapper = styled.div`
  display: flex;

  justify-content: space-around;
`
export const SubTitle = styled.text`
  font-weight: 300;
  font-size: 18px;
  color: #5743d9;
  text-align: center;
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
