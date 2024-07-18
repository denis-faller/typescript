var args = [8, 5]; // readonly [8, 5]
var angle = Math.atan2.apply(Math, args); // okay
console.log(angle);
