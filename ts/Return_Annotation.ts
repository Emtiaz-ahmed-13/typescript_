//Regular function
function double1(x: number): number {
  return x * x;
}
const out = double1(2);
console.log(out);

//using arrow function
const double2 = (x: number): number => {
  return x * x;
};
const out2 = double2(2);
console.log(out2);
