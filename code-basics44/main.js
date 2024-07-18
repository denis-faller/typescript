// или так
// function merge<T>(coll1: T[], coll2: T[]): T[]
function merge(coll1, coll2) {
    // Тело функции не поменялось!
    var result = [];
    result.push.apply(result, coll1);
    result.push.apply(result, coll2);
    return result;
}
// Работает с массивами любых типов
// Сами массивы должны иметь совпадающий тип
console.log(merge([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(merge(['one', 'two'], ['three'])); // ['one', 'two', 'three']
