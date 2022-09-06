import { createReducer } from "@reduxjs/toolkit";

import actions from "./books-actions";

const initialStore = {
    items: [],
    loading: false,
    error: null,
}

const booksReducer = createReducer(initialStore, {
    [actions.fetchBooksLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.fetchBooksSuccess]: (store, {payload}) => {
        store.items = payload;
        store.loading = false;
    },
    [actions.fetchBooksError]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    },
    [actions.addBookLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.addBookSuccess]: (store, {payload}) => {
        store.loading = false;
        store.items.push(payload);
    },
    [actions.addBookError]: (store, {payload}) => {
        store.loading = false;
        store.erorr = payload;
    },
    [actions.removeBookLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.removeBookSuccess]: (store, {payload}) => {
        store.loading = false;
        store.items = store.items.filter(({id}) => id !== payload);
    },
    [actions.removeBookError]: (store, {payload}) => {
        store.loading = false;
        store.erorr = payload;
    }
   
});


export default booksReducer;