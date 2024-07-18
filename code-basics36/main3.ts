class Point {
  protected x: number;

  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Point3D extends Point {
  protected z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  public getCoordinates() {
    return [this.x, this.y, this.z]; // OK
  }
}

const p = new Point3D(10, 8, 5);
p.x; // Property 'x' is protected and only accessible within class 'Point' and its subclasses.
p.y; // Property 'y' is protected and only accessible within class 'Point' and its subclasses.
p.z; // Property 'z' is protected and only accessible within class 'Point3D' and its subclasses.