export function Validation(name, rules, value) {
    let error = null;
    console.log(rules?.max);
    console.log(value.length);
    if (rules?.required) {
        const message = `Field ${name} is required!`;
        error = !value && message;
    }
    
    if (rules?.max) {
        const condition = rules?.max;
        const message = `Max length is ${condition}`;
        if (value && value.length > condition) {
            error = message;
        }
    }
    if (rules?.min) {
        const condition = rules?.min;
        const message = `Min length is ${condition}`;
        if (value && value.length < condition) {
            error = message;
        }
    }
    if (rules?.max && rules?.min) {
        const _maxCondition = rules?.max;
        const _minCondition = rules?.min;
        const message = `Length is line between ${_minCondition} and ${_maxCondition}`;
        if (value && (value.length > _maxCondition || value.length < _minCondition)) {
            error = message;
        }
    }
    if(rules?.noSpace) {
        const condition = rules.noSpace;
        const message = `${name} can not contain white space`
        if (condition && /\s/.test(value)){
        error =  message}
    }
    if(rules?.upperCase) {
        const condition = rules?.upperCase;
        const message = `${name} must have at least 1 uppercase`
        if (condition && /A-Z/.test(value)){
        error =  message}
    }
    if(rules?.hasNumber) {
        const condition = rules?.hasNumber;
        const message = `${name} must have at least 1 number`
        if (condition && /0-9/.test(value)){
        error =  message}
    }
    return error;
}
