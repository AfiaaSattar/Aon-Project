// Reverse a String
const reverseString = (str) => {
  // TODO: return the string reversed
  let arr = str.split("");
  let reversedArray = arr.reverse();
  let newString = reversedArray.join("");
  console.log(newString);
};

// reverseString("Hello");

//  Count Vowels
const countVowels = (str) => {
  // TODO: count and return how many vowels (a, e, i, o, u) are in the string
};

// Find the Largest Number
const findLargest = (myArr) => {
  // TODO: return the largest number in the array
  let sortedArr = myArr.sort((a, b) => b - a);
  console.log(sortedArr[0]);
};

//findLargest([1, 2, 67, 199, 223, 60]);

//  Palindrome Checker
const isPalindrome = (str) => {
  // TODO: return true if the string reads the same backward || level , lol
  // let reversedString = str.split("").reverse().join("");
  // if (reversedString === str) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  str.split("").reverse().join("") === str
    ? console.log(true)
    : console.log(false);
};

// isPalindrome("foo");

//  Random Quote
const randomQuote = (arr) => {
  // TODO: return a random element from the array
  let randomNumber = Math.floor(Math.random() * arr.length);
  console.log(arr[randomNumber]);
};

//randomQuote(["foo", "bar", "one", "three"])

// Sum of Array
const sumArray = (arr) => {
  // TODO: calculate and return the total sum of all numbers in the array
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum = sum + arr[i];
  // }

  let sum = arr.reduce((a, b) => a + b);
  console.log(sum);
};

// sumArray([30, 20, 40, 100]);

// Get Even Numbers
const evenNumbers = (arr) => {
  // TODO: return a new array with only the even numbers
  arr.map((el) => {
    if (el % 2 === 0) console.log(`${el} is Even`);
    else console.log(`${el} is Odd`);
  });
};

// evenNumbers([2, 4, 9, 8, 1]);

// Find the Smallest Number
const findSmallest = (arr) => {
  // TODO: return the smallest number in the array
  let sorted = arr.sort((a,b)=> a -b);
  console.log(sorted[0])
};

//findSmallest([23,43,55,28,32])

// Capitalize First Letter
const capitalize = (str) => {
  // TODO: return the same string but with the first letter capitalized
};

// Count Occurrences
const countOccurrences = (arr, value) => {
  // TODO: return how many times 'value' appears in the array
};

// Merge Two Arrays
const mergeArrays = (a, b) => {
  // TODO: merge both arrays into one
};
