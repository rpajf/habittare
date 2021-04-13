import styled from 'styled-components'
interface RadioProps {
  checked: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`
export const RadioLabel = styled.label<RadioProps>`
  color: ${props => (props.checked ? props.theme.colors.primary : '#8a8a8a')};
  text-align: center;
  background: ${props => props.theme.colors.textPrimary};
  border-radius: 50%;
  border: 1px solid;
  border-color: ${props =>
    props.checked ? props.theme.colors.primary : '#8a8a8a'};
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 21px;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
`

export const QuantityInfo = styled.input`
  opacity: 0;
  display: none;
`
