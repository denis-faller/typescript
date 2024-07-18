type Context<K extends string, V> = {
  [Key in K]: V;
}

const runApp = <C extends Context<string, unknown>>(ctx: C) => {};