import { createReducer, combineReducers } from "@reduxjs/toolkit";

import actions from "./books-actions";
import booksReducer from './books-reducer';

const itemsReducer = createReducer([], {
    [actions.fetchBooksSuccess]: (_, {payload}) => payload,
    [actions.addBookSuccess]: (store, {payload}) => [...store, payload],
    [actions.removeBookSuccess]: (store, {payload}) => store.filter(({id}) => id !== payload),
});

const loadingReducer = createReducer(false, {
    [actions.fetchBooksLoading]: () => true,
    [actions.fetchBooksSuccess]: () => false,
    [actions.fetchBooksError]: () => false,
    [actions.addBookLoading]: () => true,
    [actions.addBookSuccess]: () => false,
    [actions.addBookError]: () => false,
    [actions.removeBookLoading]: () => true,
    [actions.removeBookSuccess]: () => false,
    [actions.removeBookError]: () => false,
});

const errorReducer = createReducer(null, {
    [actions.fetchBooksLoading]: () => null,
    [actions.fetchBooksError]: (_, {payload}) => payload,
    [actions.addBookLoading]: () => null,
    [actions.addBookError]: (_, {payload}) => payload,
    [actions.removeBookLoading]: () => null,
    [actions.removeBookError]: (_, {payload}) => payload,
});

const booksReducer = combineReducers({
    items: itemsReducer,
    loading: loadingReducer,
    error: errorReducer,
})


export default booksReducer;