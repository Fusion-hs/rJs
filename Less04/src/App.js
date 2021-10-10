import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Menu />
    </React.Fragment>
  );
}

export default App;
