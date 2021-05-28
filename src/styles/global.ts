import { createGlobalStyle } from 'styled-components'
import { $dark_gray } from './colors'

export const GlobalStyles = createGlobalStyle`

  
  * {
    margin: 0;
    padding: 0;

  }
  
  body {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto Mono', monospace;
  }

  #root {
    height: 100vh;
   
  
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
    font-weight: 700;
  }

  



`
