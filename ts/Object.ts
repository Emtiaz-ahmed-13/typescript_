const person1: { firstName: string; lastName: string; age: number } = {
  firstName: "emtiaz",
  lastName: "ahmed",
  age: 25,
};
console.log(person1);

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "emtiaz ahmed",
    age: 25,
    location: "Dhaka",
  };
}
const r = printUser();
console.log(r);
