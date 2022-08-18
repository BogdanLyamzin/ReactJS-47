import { useContext } from "react";

import {langContext} from "../../langContext";

import locale from "./locale.json";

const Main = ()=> {
    const {lang} = useContext(langContext)

    return (
        <div>
           <h2>{locale.title[lang]}</h2>
           <p>{locale.content[lang]}</p>
        </div>
    )
}

export default Main;