import styled from 'styled-components'
// interface ContainerProps {
//   isFocused: boolean
// }
export const Container = styled.div`
  background: #ffffff;
  display: flex;

  input {
    border: 1px solid #c4c4c4;
    padding: 10px 0px 10px 13px;
    margin: 5px 0 5px 0;

    border-radius: 5px;
    color: #484848;
    &::placeholder {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #c4c4c4;
    }
  }
`
/* ${props =>
    props.&&
    css`
      color: #ede6e6;
      border: 1px solid #c4c4c4;
    `} */
