import styled from 'styled-components'
export const Container = styled.div`
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.2);
  input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 15px 0 15px 5px;

    @media (max-width: 480px) {
      flex: 1 1 50px;
    }
  }
`
export const InnerSpan = styled.span`
  padding: 10px 10px;
`
