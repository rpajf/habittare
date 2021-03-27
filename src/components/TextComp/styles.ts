import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  padding: 15px 0 10px 0;
`
export const ImageHead = styled.div`
  height: 108px;
  width: 108px;
  background: #cacaca;
  border-radius: 50%;
  align-self: center;
  border-color: #fff;
  border-width: 16px;
  border-style: solid;
`
// export const ImgBorder = styled.div`
//   display: inline-block;
//   height: 140px;
//   width: 140px;
//   border-radius: 50%;
//   border-style: solid;
//   border-width: 2px;
//   background: #fff;
// `
export const HeadText = styled.text`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  font-size: 22px;

  line-height: 33px;
  text-transform: uppercase;
  text-align: center;
  margin: 26px 0 24px 0;
`
export const SubtitleText = styled.text`
  font-weight: 300;
  color: ${props => props.theme.colors.primary};
  width: 270px;
  word-break: break-word;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
`
