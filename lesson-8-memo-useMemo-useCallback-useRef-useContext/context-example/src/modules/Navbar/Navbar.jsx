import LanguageSwitcher from "../LanguageSwitcher"

import styles from "./Navbar.module.css";

import useLang from "../../shared/hooks/useLang";

import locale from "./local.json";

const Navbar = ()=> {
    const {lang} = useLang();

    const title = locale.title[lang];

    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <div>{title}</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;