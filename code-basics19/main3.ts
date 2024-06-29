function add(a: number, b: number, c: number): number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Сигнатура подходит под все примеры выше
function add(a: unknown, b: unknown, c?: number): any {
  // тут вся логика
  if (c === undefined) {
    // ...
  }
}