function isPresence(value) {
    if (value === null || value === undefined) {
        return false;
    }
    // пустая строка
    if (typeof value === 'string') {
        if (value === '') {
            return false;
        }
    }
    // пустой массив
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return false;
        }
    }
    // пустой объект
    if (value instanceof Object) {
        if (Object.keys(value).length === 0) {
            return false;
        }
    }
    return true;
}
isPresence(''); // false
isPresence({}); // false
isPresence([]); // false
isPresence([1, 3]); // true
isPresence(10); // true
