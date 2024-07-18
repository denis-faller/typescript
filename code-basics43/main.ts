interface IBeep {
  sayBeep: () => string;
}

interface IBoop {
  sayBoop: () => string;
}

class Robo implements IBeep, IBoop {
  sayBeep = () => 'beep';

  sayBoop = () => 'boop';
}

const R2D2 = new Robo();
console.log(R2D2.sayBeep()); // 'beep'