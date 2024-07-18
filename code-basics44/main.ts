// или так
// function merge<T>(coll1: T[], coll2: T[]): T[]
function merge<T>(coll1: Array<T>, coll2: Array<T>): Array<T> {
  // Тело функции не поменялось!
  const result = [];
  result.push(...coll1);
  result.push(...coll2);
  return result;
}

// Работает с массивами любых типов
// Сами массивы должны иметь совпадающий тип
console.log(merge([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(merge(['one', 'two'], ['three'])); // ['one', 'two', 'three']