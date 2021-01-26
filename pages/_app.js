import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

// Importando o db.json
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .btn{
    background-color: #0d6efd;
    color:white;
    border-radius:0.4rem;
    border: solid 1px #4e87dd;
    padding:.5rem;
  }

  .btn:hover{
    background-color:#4e87dd;
  }

  .form-control{
    border-radius:0.1rem;
    border: solid 2px white;
    height:1.8rem;
    width:100%;
    font-size:16px;
  }

  .form-control:active{
    border: solid 2px #4e87dd;
  }

`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
