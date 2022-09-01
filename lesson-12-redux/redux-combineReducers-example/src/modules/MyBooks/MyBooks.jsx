import { useSelector,useDispatch } from "react-redux";

import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import { addBook, removeBook, setFilter } from "../../redux/actions";
import { getFilteredBooks, getFilter } from "../../redux/selectors";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const books = useSelector(getFilteredBooks);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const onAddBook = (payload) => {
        const action = addBook(payload);
        dispatch(action)
    }

    const onRemoveBook = (payload) => {
        dispatch(removeBook(payload));
    }

    const onSetFilter = ({target}) => {
        dispatch(setFilter(target.value))
    }

    return (
        <div className={styles.books}>
            <Container title="Добавить книгу">
                <FormAddBook onSubmit={onAddBook} />
            </Container>
            <Container title="Список книг">
                <input onChange={onSetFilter} value={filter} name="filter" type="text" placeholder="Введите название " />
                <BookList books={books} removeBook={onRemoveBook}  />
            </Container>
        </div>
    )

}

export default MyBooks;