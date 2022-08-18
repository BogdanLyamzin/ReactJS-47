import {useState} from "react";

import styles from "./toggle-button.module.css";

const ToggleButton = ({text}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = ()=> {
        setIsActive(prevState => !prevState)
    }

    return (
        <button onClick={handleClick} className={isActive ? styles.btnActive : styles.btn}>{text}</button>
    )
}

export default ToggleButton;
