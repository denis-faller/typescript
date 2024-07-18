class Point {
  private x: number;

  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(10, 8);
p.x; // Property 'x' is private and only accessible within class 'Point'.
p.y; // Property 'y' is private and only accessible within class 'Point'.