import { useState } from "react";

import Button from "../../../shared/components/Button";

import styles from "./form-add-book.module.css";

const FormAddBook = ({onSubmit}) => {
    const [form, setForm] = useState({
        title: "",
        author: "",
    });

    const handleChange = ({target}) => {
        const { name, value } = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...form});
        setForm({
            title: "",
            author: "",
        })
    };

    const {title, author} = form;

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className={styles.group}>
                <label className={styles.label} htmlFor="">Название:</label>
                <input value={title} name="title" onChange={handleChange} className={styles.input} type="text" placeholder="Название книги" />
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor="">Автор:</label>
                <input value={author} name="author" onChange={handleChange} className={styles.input} type="text" placeholder="Автор книги" />
            </div>
            <div className={styles.group}>
                <Button>Добавить</Button>
            </div>
        </form>
    )

}

export default FormAddBook;