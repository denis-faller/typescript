function doSomething(user) {
    console.log(user.firstName);
    console.log(user.pointsCount);
}
var user = {
    firstName: 'Mike',
    pointsCount: 1000,
};
// Оба вызова работают
doSomething(user);
doSomething({ firstName: 'Bob', pointsCount: 1800 });
