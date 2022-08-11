import {useState} from "react";
import PropTypes from "prop-types";

import styles from "./header-menu.module.css";

const HeaderMenu = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, index)=> {
        e.preventDefault();
        setActiveIndex(index);
    }

    const elements = items.map(({id, link, text}, index) => {
        const className = (index === activeIndex) ? styles.linkActive : styles.link;
        return (
        <li key={id}>
            <a onClick={(e) => handleClick(e, index)} className={className} href={link}>{text}</a>
        </li>
    )});

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default HeaderMenu;

HeaderMenu.defaultProps = {
    items: []
}

HeaderMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}

