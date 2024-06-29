function sum(a: number, b: number): number {
  return a + b;
}

const args = [1, 2] as const;;
console.log(sum(...args));