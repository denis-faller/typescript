class CustomFile {
  constructor(public name: string, public size: number) {}
}

class ImageCustomFile extends CustomFile {
  constructor(name: string, size: number, public width: number, public height: number) {
    super(name, size);
  }
}

const file = new CustomFile('open-world.jpeg', 1000);
const image = new ImageCustomFile('open-world.jpeg', 1000, 100, 100);

const showImage = (image: ImageCustomFile) => {
};
showImage(file);