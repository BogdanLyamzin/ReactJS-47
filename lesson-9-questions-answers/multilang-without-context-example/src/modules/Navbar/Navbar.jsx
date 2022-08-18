import LanguageSwitcher from "../LanguageSwitcher"

import styles from "./Navbar.module.css";

import locale from "./local.json"

const Navbar = ({lang, switchLang})=> {
    return (
        <nav className={styles.navbar}>
            <a href="">Logo</a>
            <div>{locale.title[lang]}</div>
            <LanguageSwitcher lang={lang} switchLang={switchLang} />
        </nav>
    )
}

export default Navbar;
