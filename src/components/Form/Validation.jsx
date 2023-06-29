export function Validation(name,rules,value) {
    let error = null
    if (rules?.required) {
        const message = `Field ${name} is required!`
        error = !value && message;
    }
    return error
}