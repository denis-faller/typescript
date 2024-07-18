class CustomFile {
  private static readonly maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }

  protected static isCustomFileTooBig(size: number): boolean {
    return size > CustomFile.maxCustomFileSize;
  }

  constructor(private name: string, private size: number) {
    if (CustomFile.isCustomFileTooBig(size)) {
      throw new Error('CustomFile is too big');
    }
  }
}

CustomFile.isCustomFile(new CustomFile('open-world.jpeg', 1000)); // true