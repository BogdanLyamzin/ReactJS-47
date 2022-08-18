import { useState } from "react";
import {useForm} from "react-hook-form";

import styles from "./form-add-book.module.css";

import initialState from "./initialState";

const FormAddBook = ({onSubmit}) => {
    // const [form, setForm] = useState({...initialState});

    // const handleChange = ({target}) => {
    //     const { name, value } = target;
    //     setForm(prevForm => ({
    //         ...prevForm,
    //         [name]: value
    //     }))
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit({...form});
    //     setForm({...initialState})
    // };

    // const {title, author} = form;

    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors);
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.group}>
                <label className={styles.label} htmlFor="">Название:</label>
                <input {...register("title", {required: {
                    value: true,
                    message: "Название обязателен"
                }})} name="title" className={styles.input} type="text" placeholder="Название книги" />
            </div>
            {errors.title && <p className={styles.error}>{errors.title.message}</p>}
            <div className={styles.group}>
                <label className={styles.label} htmlFor="">Автор:</label>
                <input {...register("author", {required: {
                    value: true,
                    message: "Автор обязателен"
                }})} name="author" className={styles.input} type="text" placeholder="Автор книги" />
            </div>
            {errors.author && <p className={styles.error}>{errors.author.message}</p>}
            <div className={styles.group}>
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

export default FormAddBook;