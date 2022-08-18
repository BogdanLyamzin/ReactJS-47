import Button from "../../../shared/components/Button";

import styles from "./book-list.module.css";

const BookListItem = ({id, title, author, removeBook}) => {
    return (
        <li key={id}
            className={styles.item}>{title}. Автор: {author}.
            <span className={styles.btnWrapper}>
                <Button 
                    className={styles.btn} 
                    type="button" 
                    onClick={removeBook}>
                        Удалить
                </Button>
            </span>
        </li>
    )
}

export default BookListItem;