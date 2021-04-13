import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.label};
  border-radius: 5px;
  color: ${props => props.theme.colors.textPrimary};
  padding: 5px;
  margin: 5px;
`
