import { combineReducers } from "redux";

import filterReducer from "./filter/filter-reducer";
import booksReducer from './books/books-reducer';

const rootReducer = combineReducers({
    books: booksReducer,
    filter: filterReducer
})

export default rootReducer;
