// Обычное определение
const f1 = (user) => {
    console.log(user.firstName, user.age);
  };
  
  // Деструктурированный объект
  const f2 = ({ firstName, age }) => {
    console.log(firstName, age);
  };
  
  const user = { firstName: 'Smith', age: 30 };
  f2(user); // => 'Smith', 30