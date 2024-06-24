var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Created"] = "0";
    OrderStatus["Paid"] = "1";
    OrderStatus["Shipped"] = "2";
    OrderStatus["Delivered"] = "3";
})(OrderStatus || (OrderStatus = {}));
const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['Created', 'Paid', 'Shipped', 'Delivered']
console.log(OrderStatus); // =>
//   'Created': '0',
//   'Paid': '1',
//   'Shipped': '2',
//   'Delivered': '3'
// }