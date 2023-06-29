import React from "react";
import Field from "./Field";
import { ValidatedForm } from "./ValidatedForm";

const Demo = () => {
    const validation = new ValidatedForm();

    return (
        <>
            <Field validation={validation} name="username" title="User Name" rules={
                {required: true}
            }>
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

            <Field validation={validation} name="password" title="Password" rules={
                {required: true}
            }>
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
