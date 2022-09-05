import { createReducer } from "@reduxjs/toolkit";

import { addBook, removeBook } from "./books-actions";

const booksReducer = createReducer([], {
    [addBook.type]: (store, {payload}) => {
        store.push(payload)
    },
    [removeBook]: (store, {payload}) => store.filter(item => item.id !== payload)
});


export default booksReducer;