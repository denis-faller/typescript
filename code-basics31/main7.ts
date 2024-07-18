const args = [8, 5] as const; // readonly [8, 5]
const angle = Math.atan2(...args); // okay
console.log(angle);