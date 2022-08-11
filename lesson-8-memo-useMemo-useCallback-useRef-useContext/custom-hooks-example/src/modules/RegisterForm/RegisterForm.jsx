import {useForm} from "../../shared/hooks/useForm";

import {initialState} from "./initialState";

const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

    return (
        <form onSubmit={handleSubmit}>
            <input value={state.email} name="email" onChange={handleChange} type="email" />
            <input value={state.password} name="password" onChange={handleChange} type="pasword" />
        </form>
    )
}

export default RegisterForm;