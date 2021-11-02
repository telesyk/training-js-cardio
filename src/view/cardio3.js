// import { renderBlock } from "./helpers";
// const FnOpt = [
//   fn,
//   fnCall,
//   {
//     title: '',
//     description: ''
//   }
// ];

const arrPrices = [200, 150, 300, 100, 90, 500];

function sortPrice(prices) {
  const filtered = prices.filter((p) => p >= 200);
  return filtered.sort((a, b) => a > b);
}
const sortPriceOpt = [
  sortPrice,
  sortPrice(arrPrices),
  {
    title: "Sort Price",
    description: "sortPrice(arrPrices)"
  },
  true
];
// console.log("sort prices", sortPrice(arrPrices));

//closure
function closureFunc() {
  let n = 1;
  return function () {
    return n++;
  };
}
const cl1 = new closureFunc();
const closureFuncOpt = [
  closureFunc,
  cl1(),
  {
    title: "Test closure function",
    description: "cl1()"
  }
];
// console.log("closure", cl1()); // 1
// console.log("closure", cl1()); // 2

// Add all numbers (NO ARRAYS)
// ex. addAll(1,3,5,9) === 18
function addAll(...rest) {
  return rest.reduce((sum, n) => sum + n);
}
const addAllOpt = [
  addAll,
  addAll(1, 3, 5, 9),
  {
    title: "Add all numbers",
    description: "addAll(1, 3, 5, 9)"
  }
];
// console.log("addAll:", addAll(1, 3, 5, 9));

// Summary  of prime numbers
// ex. sumPrimeNum(10) === 17
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
const isPrimeOpt = [
  isPrime,
  null,
  {
    title: "Check for prime numbers",
    description: "isPrime(2) // true"
  }
];
function sumPrimeNum(num) {
  let sum = 0;
  for (let i = num; i > 1; i--) {
    sum += isPrime(i) ? i : 0;
  }
  return sum;
}
const sumPrimeNumOpt = [
  sumPrimeNum,
  sumPrimeNum(10),
  {
    title: "Get sum of prime numbers",
    description: "sumPrimeNum(10)"
  }
];
// console.log("sumPrimeNum:", sumPrimeNum(10));

export default [
  sortPriceOpt,
  closureFuncOpt,
  addAllOpt,
  sumPrimeNumOpt,
  isPrimeOpt
];
