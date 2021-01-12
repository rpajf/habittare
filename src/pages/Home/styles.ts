import styled from 'styled-components'
export const Container = styled.div`
  background: #e9eeef;
  height: 100vh;
  display: flex;
  align-items: stretch;

  flex-direction: column;
  width: 100%;
`
export const HomeWrapper = styled.div``
export const Content = styled.div``
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: -70px;
`
export const HeadText = styled.text`
  font-weight: 600;
  font-size: 26px;
  color: #5743d9;
  text-align: center;
`

export const SubTitle = styled.text`
  font-weight: 300;
  font-size: 18px;
  color: #5743d9;
  text-align: center;
`
export const Button = styled.button`
  margin: auto;
  max-width: 115px;
  height: 25px;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 8px;
  color: #fff;
  font-size: 18px;
  text-align: center;
`
