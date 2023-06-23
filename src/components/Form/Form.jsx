import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ onSubmit }) => {

    const [username, setUsername] = useState()
    const [errors, setErrors] = useState()

    function handleSubmit() {}
    function handleOnChange(elem) {
        setUsername(elem);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input type="text" label="User" value={username} onChange={(e) => handleOnChange(e.target.value)}></Input>
                <Input ></Input>
                <Input ></Input>
                <Button label="Submit" type="Submit"></Button>
            </form>
        </>
    );
};

export default Form;
