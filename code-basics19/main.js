function concat(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return "".concat(a.toFixed()).concat(b.toFixed());
    }
    return "".concat(a).concat(b);
}
console.log(concat('one', 'two')); // onetwo
console.log(concat(3, 5.34)); // 35
console.log(concat(1.33, 10)); // 110
