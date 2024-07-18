var args = [8, 5]; // args: number[]
var angle = Math.atan2.apply(Math, args); // error! A spread argument must either have a tuple type or be passed to a rest parameter.
console.log(angle);
