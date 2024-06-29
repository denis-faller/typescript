function isError(value: unknown): boolean {
    return value instanceof Error;
  }

 console.log(isError(true));