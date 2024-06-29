function foo1(_a) {
    var firstName = _a.firstName, age = _a.age;
    console.log(firstName, age);
}
// Обычное определение
function foo2(point) {
    console.log(point);
}
// Деструктурированный массив
function foo3(_a) {
    var x = _a[0], y = _a[1];
    console.log(x, y);
}
// С псевдонимом
function foo4(_a) {
    var x = _a[0], y = _a[1];
    console.log(x, y);
}
