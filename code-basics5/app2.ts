const fruits = ['banana', 'mango', 'apple'];

const toUpper = (name: string): string => name.toUpperCase();
const upperFruits = fruits.map(toUpper);

console.log(upperFruits);