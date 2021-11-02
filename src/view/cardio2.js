// import { renderBlock } from "./helpers";
// const FnOpt = [
//   fn,
//   fnCall,
//   {
//     title: '',
//     description: ''
//   }
// ];

// longest word
function longestWord(sen) {
  const wArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wArr.sort((a, b) => b.length - a.length);
  const long = sorted.filter((w) => w.length === sorted[0].length);
  if (long.length > 1) return long;
  return sorted[0];
}
const longestWordOpt = [
  longestWord,
  longestWord("helloo, there my name John"),
  {
    title: "Longest Word",
    description: 'longestWord("helloo, there my name John")'
  },
  true
];

// array chunking
function chunkArr(arr, len) {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
}
const chunkArrOpt = [
  chunkArr,
  chunkArr([1, 2, 3, 4, 5, 6, 7], 2),
  {
    title: "Chunk Array",
    description: "chunkArr([1, 2, 3, 4, 5, 6, 7], 2)"
  }
];

// flatten array
function flattenArr(arrays) {
  // sol 1
  // return arrays.reduce((a, b) => a.concat(b));
  // sol 2
  // return [].concat.apply([], arrays);
  // sol 3
  return [].concat(...arrays);
}
const flattenArrOpt = [
  flattenArr,
  flattenArr([[1, 2], [3, 4], [5, 6], [7]]),
  {
    title: "Flatten Array",
    description: "flattenArr([[1, 2], [3, 4], [5, 6], [7]])"
  }
];

// anagram
function isAnagram(str1, str2) {
  const case1 = str1.toLowerCase().split("").sort().join();
  const case2 = str2.toLowerCase().split("").sort().join();
  return case1 === case2;
}
const isAnagramOpt = [
  isAnagram,
  isAnagram("elbow", "below"),
  {
    title: "Check Anagram",
    description: 'isAnagram("elbow", "below")'
  }
];

// ass result need to extend Array constructor with custom method
// to call like [].customMethod();
// const newArray = Array(1, 2, 3, 4, 5);
Array.prototype.duplicate = function () {
  return [].concat(...this, ...this);
};
const duplicateArrOpt = [
  [].duplicate,
  [1, 2, 3, 4, 5].duplicate(),
  {
    title: "Duplicate Array",
    description: "[1, 2, 3, 4, 5].duplicate()"
  }
];

// shift letters
function shiftLetters(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  return newStr;
}
const shiftLettersOpt = [
  shiftLetters,
  shiftLetters("hello thereZ"),
  {
    title: "Shift Letters",
    description: 'shiftLetters("hello thereZ")'
  }
];

export default [
  longestWordOpt,
  chunkArrOpt,
  flattenArrOpt,
  isAnagramOpt,
  duplicateArrOpt,
  shiftLettersOpt
];
