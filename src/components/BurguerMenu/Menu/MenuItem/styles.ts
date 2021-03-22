import styled from 'styled-components'
interface ItemProps {
  checked: boolean
}

export const Container = styled.label<ItemProps>`
  font-size: 16px;
  line-height: 2;
  padding-bottom: 10px;
  font-weight: 500;

  opacity: ${({ checked }) => (checked ? 1 : 0.5)};
  color: #5743d9;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`
