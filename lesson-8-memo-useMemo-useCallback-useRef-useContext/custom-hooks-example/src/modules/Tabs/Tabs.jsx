import { useState } from "react";

import styles from "./tabs.module.css";

const Tabs = ({items}) => {
    const [idx, setIdx] = useState(0);

    const titleList = items.map(({id, title}, index) => (
        <li key={id} onClick={()=> setIdx(index)} className={index !== idx ? styles.item: styles.itemACtive}>{title}</li>
    ));

    const {content} = items[idx];

    return (
        <div>
            <ul className={styles.heading}>{titleList}</ul>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    )
}

export default Tabs;

Tabs.defaultProps = {
    items: []
}