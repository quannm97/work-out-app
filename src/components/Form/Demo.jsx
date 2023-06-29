import React from "react";
import Field from "./Field";

const Demo = () => {
    return (
        <>
            <Field name="username" title="User Name" rules={
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

            <Field name="password" title="Password" rules={
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
