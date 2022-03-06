import { useState } from "react";

const useFormState = () => {
    const [firstName, setFirstName] = useState("");

    const handleChanges = (e) => {
        setFirstName(e.target.value)
    }


    return [ firstName, setFirstName, handleChanges]
}

export default useFormState;