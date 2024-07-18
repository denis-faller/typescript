class Point {
  private x: number;

  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  isEqual(p2: Point): boolean {
    return this.x === p2.x && this.y === p2.y;
  }
}

const point = new Point(1, 2);
point.isEqual(new Point(10, 1)); // OK
point.isEqual({ x: 1, y: 2}); // Error: Argument of type '{ x: number; y: number; }' is not assignable to parameter of type 'Point'.