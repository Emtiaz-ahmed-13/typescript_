//regular function
function addOne(num: number) {
  return num + 1;
}
const result = addOne(5);
console.log(result);

//arrow function Annotation

const double = (x: number, y: number) => x * y;

const res = double(2, 3);
console.log(res);
