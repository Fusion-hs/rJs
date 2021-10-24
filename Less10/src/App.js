import React from 'react';

import { GlobalStyle } from './components/Style/GlobalStyle';
import { NavBar } from './components/NavBar/NavBar';
import { Menu } from './components/Menu/Menu';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';

import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrder } from './components/Hooks/useOrder';

function App() {

  const openItem = useOpenItem();
  const orders = useOrder();

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} {...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </React.Fragment>
  );
}

export default App;
