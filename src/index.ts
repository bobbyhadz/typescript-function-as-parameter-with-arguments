export {};

// EXAMPLE 1 - Pass a function as a Parameter in TypeScript

function wrapper(
  a: number,
  b: number,
  // 👇️ function parameter
  doMath: (a: number, b: number) => number,
) {
  return doMath(a, b);
}

// 👇️ Define a function that matches
// expected parameter type
function sum(a: number, b: number) {
  return a + b;
}

console.log(wrapper(10, 20, sum)); // 👉️ 30

// // ---------------------------------------------

// // 👇️ Define another function that matches
// // expected parameter type
// function multiply(a: number, b: number) {
//   return a * b;
// }

// console.log(wrapper(10, 20, multiply)); // 👉️ 200

// ---------------------------------------------------

// // EXAMPLE 2 - Extract the function's type into a type alias

// type LogFunction = ({
//   name,
//   country,
// }: {
//   name: string;
//   country: string;
// }) => void;

// function wrapper(obj: { name: string; country: string }, logger: LogFunction) {
//   logger(obj);
// }

// const logger: LogFunction = (obj) => {
//   console.log(obj);
// };

// wrapper({ name: 'Bobby', country: 'Chile' }, logger);

// ---------------------------------------------------

// // EXAMPLE 3 - Use the `typeof` operator to infer the function's type

// const sum = (a: number, b: number): number => {
//   return a + b;
// };

// function wrapper(a: number, b: number, doMath: typeof sum) {
//   return doMath(a, b);
// }

// console.log(wrapper(10, 15, sum)); // 👉️ 25
