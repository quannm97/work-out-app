import  { useEffect } from "react";
import { ValidatedForm } from "./ValidatedForm";

const Field = (data) => {
    const { title, name, rules, children } = data
    const validation = new ValidatedForm();
    useEffect((name, rules,validation) => {
        validation.register(name, rules);
    }, []);
    const error = validation.errors[name];
    const onChange = validation.onChangeValue(name, rules);

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
