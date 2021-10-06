import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './components/NavBar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing:border-box;

  }

  *,
  *::before,
  *::after {
    box-sizing:inherit;
  }

  body {
    margin:0;
    background-color:#f0f0f0;
    font-family:Roboto, sans-serif;
    font-size:20px;
    color:black;
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  h1, h2, h3,
  p, ul {
    padding:0;
    margin:0;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
    </React.Fragment>
  );
}

export default App;
