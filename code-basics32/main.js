var arr = [1, 2, 3];
var comparator = function (item1, item2) { return Math.sign(item1 - item2); };
// (item1: number, item2: number) => number;
sort(arr, comparator); // Error: Type 'number' is not assignable to type '0 | 1 | -1'.
