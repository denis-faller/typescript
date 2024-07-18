var SchoolClass = /** @class */ (function () {
    function SchoolClass() {
    }
    // Тут какая-то логика
    SchoolClass.prototype.count = function () {
        return 100;
    };
    return SchoolClass;
}());
var sc = new SchoolClass();
// Возвращает число студентов в классе
sc.count();
