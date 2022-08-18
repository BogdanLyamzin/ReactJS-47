import {useState} from "react";

import Navbar from './modules/Navbar';
import Main from "./modules/Main";

import './App.css';

function App() {
    const [lang, setLang] = useState("ru");

    const switchLang = () => {
        setLang(prevLang => {
            const newLang = prevLang === "ru" ? "ua" : "ru";

            return newLang;
        })
    }

    return (
        <div className="App">
            <Navbar lang={lang} switchLang={switchLang}/>
            <Main lang={lang} switchLang={switchLang}/>
        </div>
    );
}

export default App;
