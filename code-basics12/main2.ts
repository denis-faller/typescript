function processStart(callback: () => string) {
    // value имеет тип string
    const value = callback();
    // ...
  }
  
  processStart(Math.round);