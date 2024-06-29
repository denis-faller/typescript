function stopProgram(message: string): never {
    throw new Error(message);
  }
  
  function exit(code: number = 0): never {
    process.exit(code);
  }