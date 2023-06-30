import React, { useRef, useState } from "react";
import { ValidatedForm } from "../../helper/Validation/ValidatedForm";
import Field from "../../helper/Validation/Field";

const PlansForm = ({handleShow}) => {
    const [message, setMessage] = useState("");
    const validation = new ValidatedForm();
    const formRef = useRef(null);

    function validateAllField() {
        const formFields = Array.from(formRef.current.elements);
        let hasError;
        formFields.forEach((field) => {
            if (field.name && field.type !== "submit") {
                if (!field?.value) {
                    hasError = true;
                }
            }
        });
        return hasError;
    }

    function onSubmit(event) {
        event.preventDefault();

        const hasError = validateAllField();

        if (hasError || validation.hasError()) {
            setMessage("Fill all inputs");
        } else {
            setMessage("Form submitted successfully");
        }
    }

    
    return (
        <>

            <div className="form-section">
                <div className="container">
                    <div className="d-flex p-relative">
                        <h2>Personal Info</h2>
                        <i onClick={handleShow} className="fa-solid fa-xmark p-absolute top-0 right-0"></i>
                    </div>
                    <form className="info-form" onSubmit={onSubmit} ref={formRef}>
                        <div className="info-form__2col">
                            <Field
                                validation={validation}
                                name="First name"
                                title="First Name"
                                rules={{ required: true }}
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
                                name="Last name"
                                title="Last Name"
                                rules={{ required: true }}
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
                                name="Phone number"
                                title="Phone number"
                                rules={{ required: true, noSpace: true }}
                            >
                                {function (name, onChange, value) {
                                    return (
                                        <input
                                            name={name}
                                            type="number"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    );
                                }}
                            </Field>
                            <Field
                                validation={validation}
                                name="Age"
                                title="Age"
                                rules={{ required: true, noSpace: true }}
                            >
                                {function (name, onChange, value) {
                                    return (
                                        <input
                                            name={name}
                                            type="number"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    );
                                }}
                            </Field>
                        </div>
                        <div className="info-form__1col">
                            <Field
                                validation={validation}
                                name="Email"
                                title="Email"
                                rules={{ required: true, noSpace: true }}
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
                                name="Address"
                                title="Address"
                                rules={{ required: true }}
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
                        </div>
                        <div className="info-form__2col">
                            <Field
                                validation={validation}
                                name="City"
                                title="City"
                                rules={{ required: true }}
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
                                name="Zip Code"
                                title="Zip Code"
                                rules={{ required: true, noSpace: true }}
                            >
                                {function (name, onChange, value) {
                                    return (
                                        <input
                                            name={name}
                                            type="number"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    );
                                }}
                            </Field>
                        </div>
                        <span className="info-form__checkbox">
                            <input type="checkbox" />
                            <p>Please send me latest news and updates</p>
                        </span>
                        <div className="reserve-button">
                            <p className="message">{message}</p>
                            <button className="button" type="submit">
                                Reserve Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PlansForm;
