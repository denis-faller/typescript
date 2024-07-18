interface Countable {
  count(): number;
}

class SchoolClass implements Countable {
  // Тут какая-то логика
  count(): number {
    return 100;
  }
}

const sc = new SchoolClass();
// Возвращает число студентов в классе
sc.count();