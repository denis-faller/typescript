function first<T>(coll: Array<T>): T | null {
  return coll.length > 0 ? coll[0] : null;
}

console.log(first([])); // null
console.log(first([3, 2])); // 3
console.log(first(['code-basics', 'hexlet'])); // code-basics