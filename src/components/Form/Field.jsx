import  { useEffect } from "react";

const Field = (props) => {
    const { title, name, rules, children, validation } = props;
    

    useEffect(()=>{
        validation.register(name, rules);
    }, [name, rules,validation])


    const error = validation.getError(name)
    const onChange = validation.onChangeValue(name, rules);

    // console.log(validation.getError(name));
    return (
        <>
            <label>{title}</label>
            {children(name, onChange)}
            <span className="error">{error}</span>
        </>
    );
};

export default Field;
