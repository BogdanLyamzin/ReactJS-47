import {createSlice, combineReducers} from "@reduxjs/toolkit";

import { fetchBooks, addBook, removeBook } from "./books-operations";

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    extraReducers: {
        [fetchBooks.fulfilled]: (_, {payload}) => payload,
        [addBook.fulfilled]: (store, {payload}) => [...store, payload],
        [removeBook.fulfilled]: (store, {payload}) => store.filter(item => item.id !== payload),
    }
});

const loadingSlice = createSlice({
    name: "loading",
    initialState: false,
    extraReducers: {
        [fetchBooks.pending]: () => true,
        [fetchBooks.fulfilled]: () => false,
        [fetchBooks.rejected]: () => false,
        [addBook.pending]: () => true,
        [addBook.fulfilled]: () => false,
        [addBook.rejected]: () => false,
        [removeBook.pending]: () => true,
        [removeBook.fulfilled]: () => false,
        [removeBook.rejected]: () => false,
    }
});

const errorSlice = createSlice({
    name: "error",
    initialState: null,
    extraReducers: {
        [fetchBooks.pending]: () => null,
        [fetchBooks.rejected]: (_, {payload}) => payload,
        [addBook.pending]: () => null,
        [addBook.rejected]: (_, {payload}) => payload,
        [removeBook.pending]: () => null,
        [removeBook.rejected]: (_, {payload}) => payload,
    }
});

const booksReducer = combineReducers({
    items: itemsSlice.reducer,
    loading: loadingSlice.reducer,
    error: errorSlice.reducer,
})

export default booksReducer;


