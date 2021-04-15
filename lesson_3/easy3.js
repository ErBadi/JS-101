// Question 1
let numbers = [1, 2, 3, 4];

const array1 = numbers.filter(number => number > 5);
console.log(array1.length);

const array2 = numbers.slice();
while(array2.length != 0) {
  array2.pop();
}
console.log(array2.length);

const array3 = numbers.slice();
while(array3.length != 0) {
  array3.shift();
}
console.log(array3.length);

console.log(`This is the original array: ${numbers}`);

// Question 5

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Rewrite not using 2 returns

// First option

function isColorValid(color) {
  return color === "blue" || color === "green";
}

// Second option

function isColorValid(color) {
  return ["blue", "green"].includes(color);
}
