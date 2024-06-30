function foo(value?: string | null) {
    if (value !== null && value !== undefined) {
      const upperValue = value.toUpperCase(); // (parameter) value: string
    }
    // остальная логика
  }