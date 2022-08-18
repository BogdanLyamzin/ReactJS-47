import {useState} from "react";

import Navbar from './modules/Navbar';
import Main from "./modules/Main";

import LangContext from "./langContext";

import './App.css';

function App() {

  return (
    <LangContext>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </LangContext>
  );
}

export default App;
