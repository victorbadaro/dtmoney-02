import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E62E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --background: #F0F2F5;
    --shape: #FFFFFF;
    --input-background: #E7E9EE;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (ideal para Desktop)

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16px * 93.75% = 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 16px * 87.5% = 14px
    }
  }

  // REM = 1rem = font-size da página

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .react-modal-content {
    position: relative;
    padding: 3rem;
    width: 100%;
    max-width: 576px;
    border-radius: 0.25rem;
    background-color: var(--background);
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;