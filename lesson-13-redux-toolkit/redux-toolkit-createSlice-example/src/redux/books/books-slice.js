import { nanoid } from "nanoid";
import {createSlice} from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addBook: {
            reducer: (store, {payload}) =>{
                store.push(payload)
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: nanoid()
                    }
                }
            }
        },
        removeBook: (store, {payload}) => store.filter(item => item.id !== payload)
    }
});

export const {addBook, removeBook} = booksSlice.actions;

export default booksSlice.reducer;