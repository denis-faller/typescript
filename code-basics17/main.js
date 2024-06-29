// Обычное определение
var f1 = function (user) {
    console.log(user.firstName, user.age);
};
// Деструктурированный объект
var f2 = function (_a) {
    var firstName = _a.firstName, age = _a.age;
    console.log(firstName, age);
};
var user = { firstName: 'Smith', age: 30 };
f2(user); // => 'Smith', 30
