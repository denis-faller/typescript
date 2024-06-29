// Необязательный параметр index
function filter(coll, callback) {
    var result = [];
    coll.forEach(function (n, index) {
        // Здесь он передается в колбек
        if (callback(n, index)) {
            result.push(n);
        }
    });
    return result;
}
filter([1, 2], function (n) { return n > 1; });
console.log(filter([1, 2], function (n, index) { return index < n; }));
