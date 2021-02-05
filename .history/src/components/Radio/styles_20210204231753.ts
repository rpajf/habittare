import styled, { css } from 'styled-components'

import 
interface RadioProps extends ThemedGlobalStyledClassProps {
  checked: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`
export const RadioLabel = styled.label`
  color: ${(props) => (props.checked ? props.theme.colors.primary : '#8a8a8a')};
  text-align: center;
  background: #ffffff;
  border-radius: 21px;
  border: 1px solid;
  border-color: ${(props: RadioProps) => (props.checked ? 'roxo' : '#8a8a8a')};
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
