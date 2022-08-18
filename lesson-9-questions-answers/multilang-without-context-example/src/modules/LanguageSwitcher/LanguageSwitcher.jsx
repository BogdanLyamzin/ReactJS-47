import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = ({lang, switchLang}) => {

    const toggleLang = (newLang) => {
        if(newLang !== lang){
            console.log("Switch lang");
            switchLang();
        }
    }

    return (
        <div>
            <span onClick={() => toggleLang("ru")} className={lang === "ru" ? styles.currentLang : styles.lang}>RU</span>
            |
            <span onClick={() => toggleLang("ua")} className={lang === "ua" ? styles.currentLang : styles.lang}>UA</span>
        </div>
    )
}

export default LanguageSwitcher;
