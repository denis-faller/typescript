class CustomFileFactory {
  createCustomFile(name: string, size: number): CustomFile {
    return new CustomFile(name, size);
  }
}

class ImageCustomFileFactory1 extends CustomFileFactory {
  createCustomFile(name: string, size: number): ImageCustomFile { // OK
    return new ImageCustomFile(name, size, 100, 100);
  }
}

class ImageCustomFileFactory2 extends CustomFileFactory {
  createCustomFile(name: 'file', size: number): CustomFile { // OK
    return new ImageCustomFile(name, size, 100, 100);
  }
}  

class ImageCustomFileFactory3 extends CustomFileFactory {
  createCustomFile(name: number, size: number): CustomFile { // Error!
    return new ImageCustomFile(name, size, 100, 100);
  }
}


class ImageCustomFileFactory3 extends CustomFileFactory {
  createCustomFile(name: string, size: number): {} { // Error!
    return new ImageCustomFile(name, size, 100, 100);
  }
}