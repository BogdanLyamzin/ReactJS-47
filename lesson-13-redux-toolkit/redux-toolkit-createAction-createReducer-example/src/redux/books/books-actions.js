import {createAction} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addBook = createAction("books/add", (data)=> {
    return {
        payload: {
            ...data,
            id: nanoid()
        }
    }
});

export const removeBook = createAction("books/remove");