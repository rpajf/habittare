import styled from 'styled-components'
export const Container = styled.div`
  background: #e9eeef;

  display: flex;

  flex-direction: column;
  align-items: center;
`
export const ImgBackground = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* flex:3; */
  flex:1;
  background: url('/imgs/cosmos.jpg') no-repeat;
`

export const MenuWrapper = styled.div`
  display: flex;

  /* margin: 0 auto; */
  @media (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`
export const ImgDiv = styled.div`
  max-width: 1300px;
  height: 500px;
  /* position: relative; */
`
export const MenuCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`

export const SliderBackgroud = styled.div`
  display: flex;

  background: transparent url(/imgs/cosmos.jpg);
  max-width: 1400px;
  height: 200px;
`
export const Content = styled.div`
  max-width: 1070px;
`
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 45px 0;
`
export const HeadText = styled.text`
  font-weight: 600;
  margin: 10px 0 10px 0;
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
