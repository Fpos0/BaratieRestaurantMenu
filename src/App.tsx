/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { FoodsProvider } from 'contexts/FoodsContext';
import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { FooterMenu } from './components/FooterMenu';
import Routes from './routes';

function App() {
  return (
    <Router>
      <div>
        <FoodsProvider>
          <Routes />
        </FoodsProvider>
      </div>
      <footer>
        <FooterMenu />
      </footer>
    </Router>
  );
}

export default App;
