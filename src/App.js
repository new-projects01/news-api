import React from 'react';

import GlobalState from './context/GlobalState';
import News from './components/News';

import './App.css';

const App = () => {
  return (
    <GlobalState>
      <News />
    </GlobalState>
  );
};

export default App;
