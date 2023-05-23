import montserrat400Woff2 from 'assets/fonts/montserrat-400.woff2';
import montserrat400Woff from 'assets/fonts/montserrat-400.woff';
import montserrat500Woff2 from 'assets/fonts/montserrat-500.woff2';
import montserrat500Woff from 'assets/fonts/montserrat-500.woff';
import montserrat600Woff2 from 'assets/fonts/montserrat-600.woff2';
import montserrat600Woff from 'assets/fonts/montserrat-600.woff';
import montserrat700Woff2 from 'assets/fonts/montserrat-700.woff2';
import montserrat700Woff from 'assets/fonts/montserrat-700.woff';

import { COLORS } from './consts';

export const globalStyles = `
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserrat400Woff2 as string}) format('woff2'),
      url(${montserrat400Woff as string}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserrat500Woff2 as string}) format('woff2'),
      url(${montserrat500Woff as string}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserrat600Woff2 as string}) format('woff2'),
      url(${montserrat600Woff as string}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserrat700Woff2 as string}) format('woff2'),
      url(${montserrat700Woff as string}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
        
  html {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    scroll-behavior: smooth;
  }
  
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: ${COLORS.dark};
    box-sizing: border-box;
    color: ${COLORS.white};
    font-family: 'Montserrat',
    font-size: 16px;
    flex-direction: column;
    flex: 1;
    margin: 0;
    padding: 0;
    position: relative;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
  }
  
  button, input, optgroup, select, textarea {
    font-family: 'Montserrat';
    font-size: 100%;
    line-height: 110%;
    margin: 0;
  }
        
  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
        
  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #5E5E5E;
    border-radius: 5px;
  }
`;
