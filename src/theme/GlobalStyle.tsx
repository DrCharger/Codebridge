import type { Theme } from "@mui/system";
import { createGlobalStyle, ThemeProps } from "styled-components";

const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
* {
  box-sizing: border-box
}
  html,
  body,
  #root {
    font-size: 18px;
    font-family: 'Montserrat', monospace;
  }

  body {
    background: ${(props) => props.theme.palette.background.default};
  }


  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export default GlobalStyle;
