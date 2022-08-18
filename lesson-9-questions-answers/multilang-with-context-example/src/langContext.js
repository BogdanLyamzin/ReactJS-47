import { useState, createContext } from "react";

export const langContext = createContext("ru");

const LangContext = ({children}) => {
    const [lang, setLang] = useState("ru");

    const switchLang = ()=> {
        setLang(prevLang => {
            const newLang = prevLang === "ru" ? "ua" : "ru";

            return newLang;
        })
    }

    return (
        <langContext.Provider value={{lang, switchLang}}>
            {children}
        </langContext.Provider>
    )
}

export default LangContext;