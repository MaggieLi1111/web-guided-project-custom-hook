import { useState } from "react";

const useFormState = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    const clearForm = e => {
        e.preventDefault();
        setValues(initialValues);
    };
    return [values, handleChanges, clearForm]
}

export default useFormState;