import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
      --font-family: 'Cabin', sans-serif;
      --green: #3d6f38;
      --bright-pink: #f72585;
      --body-pink:#ffc2e2;
      --deep-blue: #3d2d59;
      --light-bg: #ffeee3;
      --peach: #ffccac;
    }
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  body{
    scroll-behavior: smooth;
    position: relative; //to fix sticky header and footer positions
    /* overflow: hidden;  */
  }

  body::-webkit-scrollbar {
  width: 10px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: #ffeee3;        /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: #f72585;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: var(--font-family);
}

`;
