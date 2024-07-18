/**
 * Делает все свойства типа `T` необязательными,
 * то есть добавляет атрибут `?`.
 */
type PartialNew<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Делает все свойства типа `T` обязательными,
 * то есть удаляет атрибут `?`.
 */
type RequiredNew<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Делает все свойства типа `T` неизменяемыми,
 * то есть добавляет атрибут `readonly`.
 */
type ReadonlyNew<T> = {
  readonly [P in keyof T]: T[P];
};


type User = {
  id?: string;
  firstName?: string;
  secondName?: string;
  email?: string;
};

type AuthorizedUser = Required<User>;

const userNew: AuthorizedUser = {
  id: '1',
  firstName: 'Denis',
  secondName: 'Faller',
  email: 'richsiteru@gmail.com'
}