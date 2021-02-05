import styled from 'styled-components'
interface ContainerProps {
  checked: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

`
export const RadioLabel = styled.label`
  color: ${props => props.checked ? 'roxo' : '#8a8a8a'};
  text-align: center;
  background: #ffffff;
  border-radius: 21px;
  width: 20px;
  display: flex;
  align-items: center;
  height: 20px;
  padding: 21px;
  cursor: pointer;
`

export const QuantityInfo = styled.input`
  opacity: 0;
  display: none;
`
