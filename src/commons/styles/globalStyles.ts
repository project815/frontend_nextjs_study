import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 30px;
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont";
    src: url("/font/Diphylleia-Regular.ttf");
  }
`;
