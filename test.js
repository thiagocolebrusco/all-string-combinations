import { palindrome } from "./index.js";

const input = "addasd";
const words = palindrome(input);
let strLength = 0;
let longests = [];
words.forEach((word) => {
  if (word.length === strLength) longests.push(word);
  else if (word.length > strLength) {
    strLength = word.length;
    longests = [word];
  }
});

console.log(longests);

const sorted = longests.sort((a, b) => a.localeCompare(b));
console.log(sorted);

console.log(sorted?.[0]);
