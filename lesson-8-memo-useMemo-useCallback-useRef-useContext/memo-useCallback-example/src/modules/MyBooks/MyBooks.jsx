import { useState, useCallback } from "react";
import { nanoid } from "nanoid";

import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState("");

    const addBook = useCallback(({title, author}) => {
        const newBook = {
            title,
            author,
            id: nanoid()
        };
        setBooks(prevBooks => [...prevBooks, newBook]);
    }, []);

    const removeBook = useCallback((id) => {
        setBooks(prevBooks => prevBooks.filter(item => item.id !== id))
    }, [setBooks]);

    const handleFilter = useCallback(({target}) => setFilter(target.value), [setFilter])

    const getFilteredBooks = () => {
        if (!filter) {
            return books;
        }
        const filterValue = filter.toLowerCase();
        const filteredBooks = books.filter(({ title }) => {
            const titleValue = title.toLowerCase();
            return titleValue.includes(filterValue);
        });

        return filteredBooks;
    }

    const filteredBooks = getFilteredBooks();

    return (
        <div className={styles.books}>
            <Container title="Добавить книгу">
                <FormAddBook onSubmit={addBook} />
            </Container>
            <Container title="Список книг">
                <input onChange={handleFilter} name="filter" type="text" placeholder="Введите название " />
                <BookList books={filteredBooks} removeBook={removeBook} />
            </Container>
        </div>
    )

}

export default MyBooks;