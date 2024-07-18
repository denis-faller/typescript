type MyColl<T> = {
  data: Array<T>;
  forEach(callback: (value: T, index: number, array: Array<T>) => void): void;
  at(index: number): T | undefined;
}