import BookListItem from "./BookListItem";

import styles from "./book-list.module.css";

const BookList = ({ books, removeBook }) => {
    const elements = books.map((item) => <BookListItem removeBook={removeBook} key={item.id} {...item} />);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default BookList;