import { createGlobalStyle } from "styled-components";

// Импорт шрифтов иконок
const iconFontFace = `
  @font-face {
    font-family: 'social-icons';
    src: url('/images/socials-svg/fonts/icomoon.woff') format('woff'),
         url('/images/socials-svg/fonts/icomoon.ttf') format('ttf'),
         url('/images/socials-svg/fonts/icomoon.eot') format('eot');
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${iconFontFace}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Manrope", "Poppins", "Inter", "Arial", sans-serif;
    background-color: #f0f0f6;
    color: #767676;
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li {
    margin: 0;
    padding: 0;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  input,
  textarea {
    outline: none;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    font-style: normal;
    color: inherit;
    display: block;
  }

  button {
    cursor: pointer;
  }

  .toaster {
    min-width: 300px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }

  .toaster.success {
    background: linear-gradient(to right, #00b09b, #96c93d);
  }

  .toaster.error {
    background: linear-gradient(to right, #ff6a00, #ff0000);
  }
`;
