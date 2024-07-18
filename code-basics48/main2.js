var wait = function (ms) {
    return new Promise(function (resolve) {
        var timer = setTimeout(function () {
            resolve(ms);
        }, ms);
    });
};
