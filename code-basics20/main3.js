function isObject(value) {
    return typeof value === 'object' && value !== null;
}
function foo(value) {
    if (isObject(value)) {
        // (parameter) value: object
    }
}
