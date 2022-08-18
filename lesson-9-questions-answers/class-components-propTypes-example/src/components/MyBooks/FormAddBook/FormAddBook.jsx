import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./form-add-book.module.css";

class FormAddBook extends Component {
    state = {
        title: "",
        author: "",
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.setState({
            title: "",
            author: ""
        })
    }

    render() {
        const {handleChange, handleSubmit} = this;
        const {title, author} = this.state;

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
                    <button type="submit">Добавить</button>
                </div>
            </form>
        )
    }
}

export default FormAddBook;

// FormAddBook.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }