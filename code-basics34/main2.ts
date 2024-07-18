class Point {
  x: number;

  y: number;

  // Возвращаемый тип не указывается, так как это конструктор
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get inspect(): string {
    return `(${this.x}, ${this.y})`
  }
}

const p = new Point(2, 5);
// Свойство есть, а поля такого нет
console.log(p.inspect); // (2, 5)