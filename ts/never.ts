function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

let x: never;

function neverReturns(): never {
  while (true) {}
}
x = neverReturns();
//This line will cause a complie-time error because that funciton never return
