var concat = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return "".concat(a.toFixed()).concat(b.toFixed());
    }
    return "".concat(a).concat(b);
};
