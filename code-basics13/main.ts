// Необязательный параметр index
function filter(coll: number[], callback: (arg: number, index: number) => boolean) {
  const result: number[] = [];
  coll.forEach((n, index) => {
    // Здесь он передается в колбек
    if (callback(n, index)) {
      result.push(n);
    }
  });
  return result;
}

filter([1, 2], (n) => n > 1);
console.log(filter([1, 2], (n, index) => index < n));