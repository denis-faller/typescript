class Point {
  x: number;

  y: number;

  constructor(x: number, y: number) {
    this.x = x;

    this.y = y;
  }
}

function isEqual(p1: Point, p2: Point): boolean {
  return p1.x === p2.x && p1.y === p2.y;
}