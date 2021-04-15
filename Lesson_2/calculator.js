// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// Require the JSON file with the messages
const messages = require('./calculator_messages.json')
// Require readline-sync for inputs
const readline = require('readline-sync');
// Creating a function to make our prompt more personalized
function prompt(message) {
  console.log(`=> ${message}`);
}
// Check if the input is a valid number
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculation() {
// We welcome users
prompt(messages.welcome);
// Ask the numbers
prompt(messages.numbers[0]);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt (messages.invalid[0]);
  number1 = readline.question();
}

prompt(messages.numbers[0]);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt (messages.invalid[0]);
  number2 = readline.question();
}

prompt(`${number1} ${number2}`);

prompt(messages.operation[0]);
let operation = readline.question();
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(messages.invalid[1]);
  operation = readline.question();
}
let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
  default:
    console.log(messages.invalid[2]);
}

prompt(messages.result + `${output}`);

}

calculation();

while (true) {
  prompt(messages.operation[1]);
  let answer = readline.question();
  while (true) {
    if (answer === messages.answer[0] || answer ===  messages.answer[1]) {
      break;
    } else {
      prompt(messages.invalid[3]);
      answer = readline.question();
    }
  }
  
  if (answer === messages.answer[0]) {
    calculation();
  } else if (answer === messages.answer[1]) {
    prompt(messages.bye);
    break;
  }
}