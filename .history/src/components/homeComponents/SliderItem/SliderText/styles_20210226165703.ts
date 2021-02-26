import styled from 'styled-components'
export const TextDiv = styled.div`
  display: flex;
  max-height: 210px;

  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-65%, -60%);
`
export const Title = styled.text`
  font-weight: 600;
  font-size: 48px;
  color: #fff;
`
export const SubTitle = styled.text`
  font-weight: 300;
  font-size: 28px;
  color: #fff;
`
export const InfoText = styled.text`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
`
export const SubtitleWrapper = styled.div`
  display: flex;
`
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SellButton = styled.button`
  max-width: 68px;
  height: 23px;
  align-self: center;
  color: #fff;
  padding: 5px;
  background: #5743d9;
  text-align: center;
  padding: 6px;

  box-sizing: border-box;
  border-radius: 5px;
`
export const Line = styled.div`
  background-color: #fff;
  align-self: center;
  height: 2px;
  width: 7px;
`
