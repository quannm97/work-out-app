import React, { useEffect } from "react";
import { ValidatedForm } from "./ValidatedForm";

const Field = ({ title, name, rules, children }) => {
    const validation = new ValidatedForm();
    const onChange = validation.onChangeValue(name, rules);
    useEffect(() => {
        validation.register(name, rules);
    }, []);

    const error = validation.errors[name];
    console.log(validation.getError(name));
    return (
        <>
            <label>{title}</label>
            {children(name, onChange)}
            <span className="error">{error}</span>
        </>
    );
};

export default Field;
