import React from "react";

const Input = ({ type, label, value, onChange, error }) => {
    return (
        <>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} />
            {error && <span>{error}</span>}
        </>
    );
};

export default Input;
