type Person1 = {
  name: string;
  age: number;
};
type Employee = {
  id: number;
  title: string;
};
type Person1AndEmployee = Person1 & Employee;

const Emtiaz: Person1AndEmployee = {
  name: "emtiaz",
  age: 21,
  id: 22299343,
  title: "Software Engineer",
};

type userInfo = {
  first: string;
  last: string;
  age: number;
};
type AccountDetails = {
  email: string;
  password: string;
};
//type User = userInfo & AccountDetails;

// const Efty: User = {
//   first: "r",
//   last: "Ahmed",
//   age: 21,
//   email: "email2060@gmail.com",
//   password: "password123",
// };

console.log(`
    name is ${Emtiaz.name} and age is ${Emtiaz.age} and id is ${Emtiaz.id} and title is ${Emtiaz.title}`);
