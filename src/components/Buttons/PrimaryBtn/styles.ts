import styled from 'styled-components'
import { shade } from 'polished'
export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  color: #fff;
  border: none;
  text-align: center;
  padding: 10px 8px 10px 8px;
  margin: 5px 0 5px 0;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: ${shade(0.2, '#5743D9')};
  }
`
