function processStart1(callback: (n: number) => string) {
    const value = callback(10);
    // ...
  }


type myFunction = (n: number) => string;

function processStart2(callback: myFunction) {
  const value = callback(10);
  // ...
}