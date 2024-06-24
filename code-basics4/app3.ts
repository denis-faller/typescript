function getGreetingPhrase(name?: string | null) {
  return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}