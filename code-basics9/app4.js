function printUser(user) {
    console.log(user.firstName);
    console.log(user.pointsCount);
    var lenFirstName = function (name) { return user.firstName; };
    console.log(user.count(lenFirstName));
}
printUser({ firstName: 'Bob', pointsCount: 1800, count: function (callback) { return callback(this).length; } });
