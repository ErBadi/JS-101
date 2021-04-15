// The objective is to create a loan calculator that returns the monthly payment
// The formula in JS is: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
/* Where
m = monthly payment - dollars with cents ($X.xx)
p = loan amount - dollars with cents ($X.xx)
j = monthly interest rate - inputs percentage(5%)
n = loan duration in months - accepts floating numbers
*/

// Require readline-sync for inputs
const readline = require('readline-sync');
// Creating a function to make our prompt more personalized
function prompt(message) {
  console.log(`=> ${message}`);
}
// Check if the input is a valid number
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || (Number(number) < 0);
}

prompt('Hello, this is your bank stealing calculator, here you will get how much many you need to pay monthly to satisfy your ego. Enjoy!');

prompt('First of all, we need your loan amount');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt('Please, enter a valid number');
  loanAmount = readline.question();
}

prompt('Awesome! Now enter your anual interest rate (ex: 5)');
let monthlyRate = readline.question();

while (invalidNumber(monthlyRate)) {
  prompt('Please, enter a valid number');
  monthlyRate = readline.question();
}

monthlyRate = (monthlyRate / 100) / 12;

prompt('The last number we need is your loan duration in months');
let loanDuration = readline.question();

while (invalidNumber(loanDuration)) {
  prompt('Please, enter a valid number');
  loanDuration = readline.question();
}

function mortgageCalculator () {
  let monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
  return Math.round(monthlyPayment * 100) / 100;
}

console.log('You must pay $' + mortgageCalculator());