abstract class CustomFile {
  protected name: string;

  protected size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  sizeInKb(): number {
    return this.size / 1024;
  }
}

class ImageCustomFile extends CustomFile {
  constructor(name: string, size: number) {
    super(name, size);
  }
}