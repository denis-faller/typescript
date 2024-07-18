type dynamicKeysObject = {
  [key: string | number | symbol]: unknown;
};

const obj: dynamicKeysObject = {
  name: 'John',
  age: 30,
  0: 'zero',
  [Symbol('secret')]: 'symbol',
};