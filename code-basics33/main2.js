var user = {
    firstName: 'Vassiliy',
    lastName: 'Kuzenkov',
    type: 'user'
};
var admin = {
    firstName: 'Kirill',
    lastName: 'Mokevnin',
    type: 'admin'
};
var formatUser = function (user) {
    return [user.type, ':', user.firstName, user.lastName].join(' ');
};
console.log(formatUser(user)); // ok
console.log(formatUser(admin)); // ok
