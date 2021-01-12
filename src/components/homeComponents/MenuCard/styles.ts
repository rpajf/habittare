import styled from 'styled-components'
export const Container = styled.div`
  display: flex;

  min-height: 150px;
  justify-content: center;
  height: 347px;
  margin-right: 33px;
  margin: 30px 0px 10px 0;

  align-items: stretch;
  flex: 0 0 auto;
`
export const Card = styled.div`
  width: 100%;
  max-width: 240px;

  background: #fff;
  margin-right: 33px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 4px;
`
export const ImgWrapper = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;

  background: #c4c4c4;
  border-radius: 5px 5px 0px 80px;
`
export const CardTag = styled.label`
  background: rgba(87, 67, 217, 0.7);
  border-radius: 0px 5px;
  max-width: 119px;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  align-self: flex-end;

  color: #fff;
  height: 28px;
`
export const StatusTag = styled(CardTag)`
  background: #24a676;
  max-width: 79px;

  margin-top: auto;

  border-radius: 5px 0px 5px 0px;
`

export const CardTitle = styled.text`
  color: #5743d9;
  text-align: center;
  font-size: 16px;
`
export const HorizontalLine = styled.div`
  border: 1px solid rgba(138, 138, 138, 0.5);

  max-width: 209px;
  width: 100%;
`
export const ImgArea = styled.div`
  width: 242px;
  height: 160px;
  left: 460.5px;
  top: 914px;
  background: #c4c4c4;
  border-radius: 0px 5px 0px 80px;
`
export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  align-items: center;
`
export const InfoWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;

  justify-content: space-around;
`
export const CardInfo = styled.text`
  font-size: 10px;
  color: #8a8a8a;
`
export const CardQuantity = styled(CardInfo)`
  font-size: 12px;
  color: #5743d9;
  font-weight: 300;
`
export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: flex-start;
`
