let myVar: number | string;

function soo(param: string | number) {}

interface myInterface {
  myProp: string | number;
}

let password: string | number = 20;

type UserInfo = {
  first: string;
  last: string;
  age: number;
};
type AccountDetails1 = {
  email: string;
  password1: string;
};

let user1: UserInfo = {
  first: "emtiaz",
  last: "ahmed",
  age: 21,
};

const items1: (number | string)[] = [1, 5, 5, "hello"];
console.log(items1);
