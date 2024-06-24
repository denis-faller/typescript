enum OrderStatus {
  Created,
  Paid,
  Shipped,
  Delivered,
}

const order = {
  items: 3,
  status: OrderStatus.Created,
};

const statusOrder = OrderStatus.Created;
console.log(statusOrder); // 0

const statuses = Object.keys(OrderStatus);
console.log(statuses);