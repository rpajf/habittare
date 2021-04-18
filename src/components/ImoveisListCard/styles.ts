import styled, { css } from 'styled-components'
import { shade } from 'polished'
import PrimaryButton from '@/components/PrimaryBtn'
export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  display: flex;

  border: 1px solid transparent;
  cursor: pointer;
  /* :hover {
    border: 1px solid ${props => props.theme.colors.primary};
    transition: 0.3s;
  } */
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ImgArea = styled.div`
  background-size: cover;
  background-position: center;
  min-height: 200px;
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
  position: relative;
  @media (min-width: 768px) {
    border-radius: 5px 0 0 5px;
  }
`
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.textPrimary};
  border-radius: 0 5px 5px 0;
  height: 100%;
  padding: 10px 0 20px 10px;

  flex: 1;
`
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  .last {
    margin-right: 70px;
  }
`
export const ImovelInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`

export const PriceLabel = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 8px 12px 8px 8px;
  left: 0;
  bottom: 0;
  border-radius: 0px 5px 0 5px;
  background-color: ${props => props.theme.colors.primary};

  font-weight: 200;
`
export const SmallText = styled.text`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 14px;
`
export const StatusLabel = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  font-size: 14px;

  right: 0;
  font-weight: 200;
  border-radius: 5px 0 0px 0px;
  background-color: ${props => props.theme.colors.primary};
  padding: 6px;
`

export const ImovelName = styled.text`
  font-size: 20px;
  text-align: start;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors.primary};
  text-transform: capitalize;
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
  color: ${props => props.theme.colors.primary};
  margin: 0 10px 0 15px;
`
export const TextFoot = styled.div`
  height: 1px;
  width: 360px;
  margin-left: 5px;
  background: #c4c4c4;
  margin: 10px 0 10px 0;
`
export const ImovelData = styled.text`
  color: #67706a;
  font-weight: 500;

  font-size: 14px;
  text-transform: uppercase;
`
export const ButtonsWrapper = styled.div`
  display: flex;
`
export const Button = styled(PrimaryButton)`
  background: ${props => props.theme.colors.primary};
  padding: 6px 8px 6px 8px;
  font-weight: 200;
  font-size: 14px;
  margin: 20px 20px 0 0;

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }
`
