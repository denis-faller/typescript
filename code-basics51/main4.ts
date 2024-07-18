type Listeners = {
  [key: `on${string}`]: (value: unknown) => void
}

const streamListeners: Listeners = {
  onStart() {},
  onFinished() {}
}