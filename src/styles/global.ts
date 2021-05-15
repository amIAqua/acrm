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
    background: ${$dark_gray};
  
  }



`
