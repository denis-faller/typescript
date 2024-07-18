class SomeClass {
  constructor(public one: number, private two: string) {}

  get three(): string {
    return `${this.one} ${this.two}`;
  }
}