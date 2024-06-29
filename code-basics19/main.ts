function concat(a: number, b: number): string;
function concat(a: string, b: string): string;

function concat(a: unknown, b: unknown): string {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

console.log(concat('one', 'two')); // onetwo
console.log(concat(3, 5.34)); // 35
console.log(concat(1.33, 10)); // 110