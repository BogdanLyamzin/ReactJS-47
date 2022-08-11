import {memo} from "react";

import styles from "./book-list.module.css";

const BookListItem = ({id, title, author, removeBook}) => {
    return (
        <li
            className={styles.item}>{title}. Автор: {author}.
            <button type="button" onClick={()=> removeBook(id)} className={styles.btn}>Удалить</button>
        </li>
    )
}

export default memo(BookListItem);