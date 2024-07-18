class CustomFile {
  static maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }
}

class ImageCustomFile extends CustomFile {
  static maxCustomFileSize = 2000; // Error!

  static isCustomFile(file: CustomFile): boolean { // Error!
    return file instanceof ImageCustomFile;
  }
}