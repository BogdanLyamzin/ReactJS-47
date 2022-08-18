
import { Component } from "react";
import { nanoid } from "nanoid";

import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import styles from "./my-books.module.css";

class MyBooks extends Component {

    state = {
        books: [],
        filter: ""
    }

    addBook = ({title, author}) => {
        this.setState(({ books }) => {
            const newBook = {
                title,
                author,
                id: nanoid()
            };
            return {
                books: [...books, newBook]
            }
        });
    }

    removeBook = (id) => {
        this.setState(({ books }) => {
            return {
                books: books.filter(item => item.id !== id)
            }
        })
    }

    handleFilter = ({target}) => {
        this.setState({
            filter: target.value
        })
    }

    getFilteredBooks() {
        const { filter, books } = this.state;
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

    render() {
        const {  handleFilter, addBook, removeBook } = this;

        const books = this.getFilteredBooks();

        return (
            <div className={styles.books}>
                <Container title="Добавить книгу">
                    <FormAddBook />
                </Container>
                <Container title="Список книг">
                    <input onChange={handleFilter} name="filter" type="text" placeholder="Введите название " />
                    <BookList books={books} removeBook={removeBook} />
                </Container>
            </div>
        )
    }
}

export default MyBooks;