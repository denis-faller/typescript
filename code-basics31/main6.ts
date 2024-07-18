const args = [8, 5]; // args: number[]
const angle = Math.atan2(...args); // error! A spread argument must either have a tuple type or be passed to a rest parameter.
console.log(angle);