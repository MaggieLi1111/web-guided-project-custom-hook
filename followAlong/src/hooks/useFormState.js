import { useState } from "react";

const useFormState = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    const clearForm = e => {
        e.preventDefault();
        setValues({
            firstName: "",
            lastName: "",
            email: "",
        });
    };


    return [values, handleChanges, clearForm]
}

export default useFormState;