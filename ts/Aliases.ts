type Person2 = {
  name: string;
  age: number;
};

const person2: Person2 = {
  name: "emtiaz ahmed",
  age: 23,
};

function printPerson2(person2: Person2): void {
  console.log(`Name is ${person2.name} and age is ${person2.age}`);
}

printPerson2(person2);

const Person3: Person2 = {
  name: "emtiaz ahmed",
  age: 23,
};
printPerson2(Person3);
