import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import InputSearchBar from './components/InputSearchBar'
function App() {
  return (
    <BrowserRouter>
      <Route path="/" render={() => (<InputSearchBar />)} />

    </BrowserRouter>
  );
}

export default App;
