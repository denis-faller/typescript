const concat: {
  (a: number, b: number): string;
  (a: string, b: string): string;
} = (a: unknown, b: unknown) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}