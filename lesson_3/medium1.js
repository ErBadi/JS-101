// Q1 print The Flintstones Rock! 10 times with an indention in each one
function printer(sentence) {
  let indent = 0;
  while (indent < 10) {
    let array = [];
    let counter = indent;
    while (counter != 0) {
      array.push("");
      counter -= 1;
    }
    array.push(sentence);
    console.log(array.join(" "));
    indent += 1;
  }
}

printer("The Flintstones Rock!");

//Q2 swap case of letters

let munstersDescription = "The Munsters are creepy and spooky.";
let answer = munstersDescription.split("")
.map((c) => 
c === c.toUpperCase()
? c.toLowerCase()
: c.toUpperCase()
).join("");

console.log(answer);

//Q3 

function checker(input) {
  return input > 0;
}

function factors(number) {
  if (checker(number)) {
    let divisor = number;
    let factors = [];
    
    while (divisor !==0) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    }
    return factors;
  } else console.log("Input a number higher than 0");
}

console.log(factors(500));

//Q9
console.log("paper");

//Q10

