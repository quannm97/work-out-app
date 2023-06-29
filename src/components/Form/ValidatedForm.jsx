import React, { useState } from "react";
import { Validation } from "./Validation";

export function ValidatedForm(defaultValues = {}) {
    const [values, setValues] = useState(defaultValues);
    const [rules, setRules] = useState({});
    const [errors, setErrors] = useState({});
    function register(name, rule) {
        !values?.hasOwnProperty(name) &&
            setValues((prev) => ({ ...prev, [name]: defaultValues }));
        !rules?.hasOwnProperty(rule) &&
            setRules((prev) => ({ ...prev, [rule]: rule || {} }));
    }
    function onChangeValue(name, rules) {
        return function (event) {
            onChangeField(name, rules, event.target.value);
        };
    }
    function onChangeField(name, rules, value) {
        setValues((prev) => ({ ...prev, [name]: value }));
        onValidate(name, rules, value);
    }

    function onValidate(name, rules, value) {
        const error = Validation(name, rules, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    }
    function getValue(name) {
        return values?.[name];
    }
    function getError(name) {
        return errors?.[name];
    }
    // console.log(getValue('username'));
    return {
        values: values,
        register: register,
        onChangeValue: onChangeValue,
        errors: errors,
        getValue: getValue,
        getError: getError,
    };
}
