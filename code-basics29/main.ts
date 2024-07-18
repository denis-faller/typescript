type Order = {
    status: 'Created',
  }
  
  type OneHundredOrder = Order & {
    cost: 100
  }
  
  const myOrder: OneHundredOrder = {
    status: 'Created',
    cost: 100
  }