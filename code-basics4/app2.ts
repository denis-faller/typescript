function getGreetingPhrase(name?: string) {
    return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
  }
  
  getGreetingPhrase('Mike'); // Hello, MIKE!
  getGreetingPhrase(); // Hello, Guest!