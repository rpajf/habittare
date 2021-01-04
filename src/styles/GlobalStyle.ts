import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500&display=swap');

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    background: ${props => props.theme.colors.background};

    font-family: 'Poppins', sans-serif;
    font: 400 16px 'Poppins', sans-serif;
  }
`
