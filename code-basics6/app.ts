const fruits: string[] = ['banana', 'mango', 'apple'];

function toUpperArray(items: string[]): string[] {
    return items.map((s) => s.toUpperCase());
  }

console.log(toUpperArray(fruits));