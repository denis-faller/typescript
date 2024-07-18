var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(42);
    }, 1000);
});
