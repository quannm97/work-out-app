import React from "react";
import { ValidatedForm } from "../../helper/Validation/ValidatedForm";
import Field from "../../helper/Validation/Field";

const Demo = () => {
    const validation = new ValidatedForm();
    function onSubmit(event) {
        event.preventDefault()
        const hasError = validation.hasError();
    }

    return (
        <>
            <Field
                validation={validation}
                name="username"
                title="User Name"
                rules={{ required: true, max: 12, min: 3, noSpace: true }}
            >
                {function (name, onChange, value) {
                    return (
                        <input
                            name={name}
                            type="text"
                            value={value}
                            onChange={onChange}
                        />
                    );
                }}
            </Field>

            <Field
                validation={validation}
                name="password"
                title="Password"
                rules={{ required: true, min: 8 }}
            >
                {function (name, onChange, value) {
                    return (
                        <input
                            name={name}
                            type="text"
                            value={value}
                            onChange={onChange}
                        />
                    );
                }}
            </Field>

            <button typeof="submit">click here</button>
        </>
    );
};

export default Demo;
