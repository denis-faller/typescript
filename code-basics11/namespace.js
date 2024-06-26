var Hello;
(function (Hello) {
    function helloWorld() {
        console.log("Hello, world!");
    }
    Hello.helloWorld = helloWorld;
})(Hello || (Hello = {}));
var helloWorld = Hello.helloWorld();
