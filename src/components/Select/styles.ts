import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;
  padding: 10px 15px 10px 10px;

  select {
    background: #fff;
    position: relative;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;

    color: #8a8a8a;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    :focus {
      outline: 0;
    }
    option {
      position: absolute;
      transition: ease-in 1100ms;
      width: 100%;
      max-width: 400px;
    }
  }
  span {
    margin-left: 10px;
    width: 0;
    height: 0;
    top: 45%;
    right: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid #000;
    position: absolute;
    :hover {
      cursor: none;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`

export const Arrow = styled.span``
export const Content = styled.select``
export const Opt = styled.option``
