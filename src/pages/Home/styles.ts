import styled from 'styled-components'
export const Container = styled.div`
  background: #e9eeef;
`
export const Content = styled.div`
  max-width: 1069px;
  margin: 0 auto;
`
export const CardWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const HomeCompsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
export const SubTitle = styled.text`
  font-weight: 300;
  font-size: 18px;
  color: #5743d9;
  text-align: center;
  width: 490px;
  line-height: 30px;
  word-break: break-word;
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
