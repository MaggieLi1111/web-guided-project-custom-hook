import { useState } from "react";

const useFormState = () => {
    const [firstName, setFirstName] = useState("");

    const handleChanges = (e) => {
        setFirstName(e.target.value)
    }

    const clearForm = e => {
        e.preventDefault();
        setFirstName("");
      };
    

    return [ firstName, setFirstName, handleChanges, clearForm]
}

export default useFormState;