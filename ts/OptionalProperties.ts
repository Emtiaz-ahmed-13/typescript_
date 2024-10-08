//now,when you create an object, you can choose whether or not to include the email property
type User = {
  name: string;
  age?: number;
  readonly location: string;
};
const user: User = {
  name: "emtiaz",
  age: 21,
  location: "Dhaka",
};
console.log(
  `name is ${user.name} and age is ${user.age} and location is ${user.location}`
);
