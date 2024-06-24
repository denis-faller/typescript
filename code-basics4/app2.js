function getGreetingPhrase(name) {
    return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}
console.log(getGreetingPhrase('Mike')); // Hello, MIKE!
console.log(getGreetingPhrase()); // Hello, Guest!
