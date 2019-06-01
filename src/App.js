import React, { Component } from 'react';

import "./styles.css"
import Main from './pages/main'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
    </div>
  );
}

export default App;
