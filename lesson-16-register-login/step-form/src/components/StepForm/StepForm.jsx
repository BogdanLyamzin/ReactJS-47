import {useState} from "react";

import useForm from './../../shared/hooks/useForm';

import initialState from "./initialState";

const StepForm = ({onSubmit}) => {
    const [step, setStep] = useState(1);
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const {name, phone, email, address} = state;

    const nextStep = () => setStep(prevStep => prevStep + 1)

    return (
        <form action="" onSubmit={handleSubmit}>
            {step === 1 && (<div>
                <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" /><br />
                <input type="text" name="phone" value={phone} onChange={handleChange} placeholder="Phone" /><br />
                <button type="button" onClick={nextStep}>Next Step</button>
            </div>)}
            {step === 2 && (<div>
                <input type="text" name="email" value={email} onChange={handleChange} placeholder="Email" /><br />
                <input type="text" name="address" value={address} onChange={handleChange} placeholder="Address" /><br />
                <button>Submit</button>
            </div>)}
        </form>
    )

}

export default StepForm;