// Свойства в описании типа разделяются через запятую (,)
function doSomething(user) {
    console.log(user.firstName);
    console.log(user.pointsCount);
}
doSomething({ firstName: 'Alice', pointsCount: 2000 });
doSomething({ firstName: 'Bob', pointsCount: 1800 });
