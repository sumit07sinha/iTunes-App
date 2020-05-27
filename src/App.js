import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import InputSearchBar from './components/InputSearchBar'
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => (<div><div className="app-header">iTunes App</div><InputSearchBar /></div>)} />

    </BrowserRouter>
  );
}

export default App;
