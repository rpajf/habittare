import styled from 'styled-components'
import { shade } from 'polished'
import PrimaryButton from '@/components/PrimaryBtn'

export const Container = styled.div`
  width: 800px;
  height: 260px;
  background: #fff;
  margin-top: 20px;
  border-radius: 5px;
  display: flex;
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ImgArea = styled.div`
  background: #6666;
  width: 50%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  position: relative;
`
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  flex: 1;
`
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const ImovelInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`

export const PriceLabel = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 8px 12px 8px 8px;
  left: 0;
  bottom: 0;
  border-radius: 0 25px 0 5px;
  background-color: #6b2ec1;

  font-weight: 200;
`
export const SmallText = styled.text`
  color: #fff;
  font-size: 14px;
`
export const StatusLabel = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  font-size: 14px;

  right: 0;
  font-weight: 200;
  border-radius: 5px 5px 0 5px;
  background-color: #6b2ec1;
  padding: 6px;
`

export const ImovelName = styled.text`
  font-size: 20px;
  text-align: start;
  font-weight: 500;
  line-height: 24px;
  color: #6b2ec1;
`
export const ImovelLocation = styled.text`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #606060;
`
export const ImovelDescription = styled.text`
  font-size: 14px;
  font-weight: 300;

  line-height: 16px;
  margin: 10px 0 5px 0;
  color: #827c7c;
`
export const ImovelInfo = styled.text`
  font-size: 18px;
  font-weight: 450;
  color: #6b2ec1;
  margin: 0 10px 0 15px;
`
export const TextFoot = styled.div`
  height: 1px;
  width: 360px;
  background: #c4c4c4;
  margin: 10px 0 10px 0;
`
export const ImovelData = styled.text`
  color: #67706a;
  font-weight: 500;
  font-size: 16px;
`
export const ButtonsWrapper = styled.div`
  display: flex;
`
export const Button = styled(PrimaryButton)`
  background: #6b2ec1;
  padding: 6px 8px 6px 8px;
  font-weight: 200;
  font-size: 14px;
  margin: 0 15px 0 15px;
  &:hover {
    background: ${shade(0.2, '#6b2ec1')};
  }
`
