import styled from 'styled-components'
export const TextDiv = styled.div`
  display: flex;
  cursor: default;
  max-height: 210px;
  height: 100%;
  align-self: flex-start;
  flex-direction: column;
`
export const Title = styled.text`
  font-weight: 600;
  font-size: 48px;
  color: ${props => props.theme.colors.textPrimary};
  text-transform: capitalize;
`
export const SubTitle = styled.text`
  font-weight: 300;
  margin-left: 10px;

  font-size: 28px;
  color: ${props => props.theme.colors.textPrimary};
`
export const InfoText = styled.text`
  margin: 0 10px 0 10px;
  font-weight: 300;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
`
export const SubtitleWrapper = styled.div`
  display: flex;
`
export const InfoWrapper = styled.div`
  display: flex;
  max-width: 380px;
  justify-content: space-between;
`

export const SellButton = styled.div`
  margin-left: 10px;
  align-self: center;
  color: ${props => props.theme.colors.textPrimary};
  padding: 2px 10px;
  background: ${props => props.theme.colors.primary};
  text-align: center;

  border: none;

  border-radius: 5px;
`
export const Line = styled.div`
  background-color: ${props => props.theme.colors.textPrimary};
  align-self: center;
  height: 2px;
  width: 7px;
`
