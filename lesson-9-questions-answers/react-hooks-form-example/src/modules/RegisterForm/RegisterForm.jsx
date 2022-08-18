import {useState} from "react";

import {initialState} from "./initialState";

const RegisterForm = ({onSubmit}) => {
    const [state, setState] = useState({...initialState});

    const handleChange = ({target}) => {
        const { name, value } = target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({...initialState})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={state.email} name="email" onChange={handleChange} type="email" placeholder="Введите email" />
            <input value={state.password} name="password" onChange={handleChange} type="password" placeholder="Введите пароль" />
            <button>Register</button>
        </form>
    )
}

export default RegisterForm;
