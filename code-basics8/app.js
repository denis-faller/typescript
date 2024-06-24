var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Created"] = 0] = "Created";
    OrderStatus[OrderStatus["Paid"] = 1] = "Paid";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
const order = {
    items: 3,
    status: OrderStatus.Created,
};
const statusOrder = OrderStatus.Created;
console.log(statusOrder); // 0
const statuses = Object.keys(OrderStatus);
console.log(statuses);
