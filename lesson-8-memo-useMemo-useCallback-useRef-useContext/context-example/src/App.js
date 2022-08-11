import {useState} from "react";

import Navbar from './modules/Navbar';
import Main from "./modules/Main";

import LangProvider from "./langContext";

import "./App.css";

function App() {

  return (
    <LangProvider>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </LangProvider>
  );
}

export default App;
