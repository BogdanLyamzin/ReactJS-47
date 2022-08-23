import { NavLink } from "react-router-dom";

import styles from "./menu.module.css";

const getClassName = ({isActive}) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}

const Menu = () => {

    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                <li>
                    <NavLink className={getClassName} to="/">Home</NavLink>
                    {/* 
                    const NavLink = ({className, to}) => {
                        if(typeof className === "string") {
                            return <a className={className}>{children}</a>
                        }
                        else if(typeof className === "function") {
                            const isActive = to === currentAddress;
                            const result = className({isActive})
                        }
                    }
                    */}
                </li>
                <li>
                    <NavLink className={getClassName} to="/posts">Posts</NavLink>
                </li>
                <li>
                    <NavLink className={getClassName} to="/contacts">Contacts</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu;