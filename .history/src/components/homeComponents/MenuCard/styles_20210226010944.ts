import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 5px;
  margin

  border: 1px solid transparent;
  cursor: pointer;
  :hover {
    border: 1px solid #5743d9;
  }
`

export const Header = styled.div`
  height: 160px;
  background: #cacaca;
  border-radius: 5px 5px 0px 80px;
  position: relative;
`

export const topLabel = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 5px 0 5px;
  background-color: #5743d9;
  color: white;
  padding: 5px;
`
export const BottomLabel = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 0 5px 0 5px;
  background-color: #24a676;
  color: white;
  padding: 5px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 13px;
`

export const Title = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #5743d9;
  border-bottom: 1px solid rgba(138, 138, 138, 0.5);
  margin-bottom: 14px;
`
export const Deion = styled.div`
  display: flex;
  flex-direction: column;
`

export const DeionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
  align-items: center;
`

export const DeionItemIcon = styled.div`
  width: 11px;
  height: 12px;
  background: rgba(138, 138, 138, 0.5);
`

export const DeionItemText = styled.div``

export const DeionItemMainText = styled.text`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.colors.primary};
`
