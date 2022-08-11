import { memo, useMemo } from "react";
import { nanoid } from 'nanoid';

import useForm from "../../../shared/hooks/useForm";

import styles from "./form-add-book.module.css";

import { initialState } from "./initialState";

const FormAddBook = ({ onSubmit }) => {

    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState })

    const { title, author } = state;

    const titleId = useMemo(() => nanoid(), []);
    const authorId = useMemo(() => nanoid(), []);

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={titleId}>Название:</label>
                <input id={titleId} value={title} name="title" onChange={handleChange} className={styles.input} type="text" placeholder="Название книги" />
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={authorId} >Автор:</label>
                <input id={authorId} value={author} name="author" onChange={handleChange} className={styles.input} type="text" placeholder="Автор книги" />
            </div>
            <div className={styles.group}>
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

export default memo(FormAddBook);