// Question 1
/*
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));
*/

// Question 3
/*
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));
*/

// Question 4
/*
let famousWords = "seven years ago...";
let insertWords = "Four score and";

console.log(insertWords, famousWords);
console.log(insertWords.concat(famousWords));
*/

// Question 5
/*
let newArray = [1, 2, 3, 4, 5];
newArray.splice(2, 1);
console.log(newArray);
*/

// Question 6 (the answer is not this, but I created this code to check how spread syntax is used)
/*
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", ["Pebbles"]]);
console.log(flintstones);
flintstones = [].concat(...flintstones);
console.log(flintstones);
*/

// Question 7
/*
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstones).filter(elem => elem[0] === "Barney").shift());
*/

// Question 9
let title = "Flintstone Family Members";
let titleLength = title.length;
let needSpace = titleLength + Math.floor((40 - titleLength) / 2)
let finalTitle = title.padStart(needSpace, ' ');
console.log(finalTitle);

// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log('Letter t appears', statement1.split('t').length - 1, 'times in sentence 1');
console.log('Letter t appears', (statement2.match(/t/g) || []).length, 'times in sentence 2');