interface IOneWay {
  one: string;
}

interface IOrAnother {
  another: string;
}

type OneWayOrAnother = IOneWay & IOrAnother;

const example: OneWayOrAnother = {
  one: 'A',
  another: 'B',
}