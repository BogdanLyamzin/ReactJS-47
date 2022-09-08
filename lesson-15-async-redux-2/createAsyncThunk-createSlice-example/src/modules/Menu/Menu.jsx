import { NavLink } from "react-router-dom";

import styles from "./menu.module.css";

import items from "./items";

const getClassName = ({isActive}) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}

const Menu = () => {
    const elements = items.map(({id, to, text}) => (
        <li key={id}>
            <NavLink className={getClassName} to={to}>{text}</NavLink>
        </li>
    ));

    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {elements}
            </ul>
        </div>
    )
}

export default Menu;