// const FnOpt = [
//   fn,
//   fnCall,
//   {
//     title: '',
//     description: ''
//   }
// ];

function reverseString(str) {
  /* case 1 */
  return str.split("").reverse().join("");
  /* case 2 */
  // return str.split("").reduce((revStr, char) => char + revStr);
}
const reverseStringOpt = [
  reverseString,
  reverseString("hello"),
  {
    title: "Return reversed string",
    description: "reverseString('hello')"
  },
  true
];
//--------------------

function isPalindrom(str) {
  const revStr = str.split("").reverse().join("");
  return revStr === str;
}
const isPalindromOpt = [
  isPalindrom,
  isPalindrom("racecar"),
  {
    title: "Check for palindrom",
    description: "isPalindrom('racecar')"
  }
];
//--------------------

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}
const capitalizeOpt = [
  capitalize,
  capitalize("how are you, my dear"),
  {
    title: "Capitalize text",
    description: 'capitalize("how are you, my dear")'
  }
];
//--------------------

function revInteger(int) {
  const revStr = int.toString().split("").reverse().join(""); // convert INT to string

  return parseInt(revStr, 10) * Math.sign(int); // return parseInt(revStr);
}
const revIntegerOpt = [
  revInteger,
  revInteger(-12345),
  {
    title: "Revert integer",
    description: "revInteger(-12345)"
  }
];
//--------------------

function mostCommonChar(str) {
  const charMap = {};
  let maxChar = "";
  let maxNum = 0;

  str.split("").forEach((char) => {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  });
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
const mostCommonCharOpt = [
  mostCommonChar,
  mostCommonChar("javascriptt"),
  {
    title: "Get most common character",
    description: "mostCommonChar('javascripttt')"
  }
];
//--------------------

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz();

export default [
  reverseStringOpt,
  isPalindromOpt,
  capitalizeOpt,
  revIntegerOpt,
  mostCommonCharOpt
];
