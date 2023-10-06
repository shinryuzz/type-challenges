export {};

type Person = {
  surname: string;
  middleName?: string;
  givenName: string;
};

type ReadonlyPerson = Readonly<Person>;

const person: Person = {
  surname: "yamada",
  middleName: "zero",
  givenName: "taro",
};
person.givenName = "asdf";

const readonlyPerson: ReadonlyPerson = {
  surname: "yamada",
  middleName: "zero",
  givenName: "taro",
};

readonlyPerson.givenName = "asdfasd"; // read-only だと property の代入が許可されない

interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
