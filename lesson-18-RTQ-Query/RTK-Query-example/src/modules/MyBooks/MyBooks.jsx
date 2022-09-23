import { useSelector, useDispatch } from "react-redux";

import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import {setFilter} from "../../redux/filter/filter-actions";
// import { getFilteredBooks } from "../../redux/books/books-selectors";
import { getFilter } from "../../redux/filter/filter-selectors";
import { useGetBooksQuery, useAddBookMutation, useRemoveBookMutation } from "../../redux/books/booksApi";

import styles from "./my-books.module.css";

const MyBooks = () => {
    // const books = useSelector(getFilteredBooks);
    const {data = [], isLoading, isError} = useGetBooksQuery();
    const [addBook, addInfo] = useAddBookMutation();
    const [removeBook, removeInfo] = useRemoveBookMutation();

    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const onAddBook = (newBook) => {
        addBook(newBook).unwrap();
    }

    const onRemoveBook = (id) => {
        removeBook(id);
    }

    const onSetFilter = ({target}) => {
        dispatch(setFilter(target.value))
    }

    return (
        <div className={styles.books}>
            {isLoading && <p>...Load books</p>}
            {isError && <p>Error load books</p>}
            <Container title="Добавить книгу">
                <FormAddBook onSubmit={onAddBook} />
            </Container>
            <Container title="Список книг">
                <input onChange={onSetFilter} value={filter} name="filter" type="text" placeholder="Введите название " />
                 <BookList books={data} removeBook={onRemoveBook}  />
            </Container>
        </div>
    )

}

export default MyBooks;