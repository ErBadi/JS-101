// This program will check your political compatibility in Spain at 22 march 2021. Love is in the air.

// Requirements to write to a JSON file the results
const fs = require('fs');

// Introducing the package to ask prompts to the user.
const readline = require('readline-sync');

// Creating a customized prompt
function prompt (message) {
  console.log(`( ♥ ͜ʖ ♥ ) ${message}`);
} 

// This will be a JSON format file for storing user's inputs
let resultsCount = {
  "PP" : 0,
  "PSOE" : 0,
  "Vox" : 0,
  "Podemos" : 0,
  "Ciudadanos" : 0
}

// Creating a counter function to take count of the results and display them.
function countParties (selection) {
  switch (selection) {
    case "PP" :
      resultsCount.PP = resultsCount.PP + 1;
      break;
    case "PSOE" :
      resultsCount.PSOE = resultsCount.PSOE + 1;
      break;
    case "Podemos" :
      resultsCount.Podemos = resultsCount.Podemos + 1;
      break;
    case "Vox" :
      resultsCount.Vox = resultsCount.Vox + 1;
      break;
    case "Ciudadanos" :
      resultsCount.Ciudadanos = resultsCount.Ciudadanos + 1;
      break;
  }
}

let counter = 1;
prompt('Welcome to the political loving machine, tell me your hidden secrets and we will get dirty\n');

while (true) {
  
  prompt(`This is the play number ${counter}`);
  
  // Asking the user for the input
  prompt('Which is your favourite political party? Choose between: \nVox\nPodemos\nPP\nPSOE');
  let politicalParty = readline.question();
  
  const VALID_PARTIES = ['Vox', 'Podemos', 'PP', 'PSOE', 'Ciudadanos'];
  
  while (!VALID_PARTIES.includes(politicalParty)) {
    prompt('Choose a correct pary, don\'t be naughty\n');
    politicalParty = readline.question();
  }
  
  // Now we generate a random number by the computer. Creating our AI papi.
  const randomNumber = Math.floor(Math.random() * 3);
  
  const computerParty = VALID_PARTIES[randomNumber];
  
  prompt(`You chose ${politicalParty}, while the AI chose ${computerParty}\n`);
  
  countParties(politicalParty);
  
  // I know there are not all the options, but I'm tired of typing, I just wanted to make this working.
  if ((politicalParty === 'Vox' && computerParty === 'PSOE') ||
      (politicalParty === 'PP' && computerParty === 'PSOE') ||
      (politicalParty === 'PP' && computerParty === 'Podemos') ||
      (politicalParty === 'Vox' && computerParty === 'Podemos') ||
      (politicalParty === 'PSOE' && computerParty === 'Vox') ||
      (politicalParty === 'PSOE' && computerParty === 'PP') ||
      (politicalParty === 'Podemos' && computerParty === 'Vox') ||
      (politicalParty === 'Podemos' && computerParty === 'PP')) {
    prompt('Los que se pelean se desean\n');
  } else if ((politicalParty === 'Vox' && computerParty === 'Vox') ||
      (politicalParty === 'Vox' && computerParty === 'PP') ||
      (politicalParty === 'PSOE' && computerParty === 'Podemos') ||
      (politicalParty === 'PSOE' && computerParty === 'PSOE') ||
      (politicalParty === 'PP' && computerParty === 'PP') ||
      (politicalParty === 'Podemos' && computerParty === 'Podemos') ||
      (politicalParty === 'Podemos' && computerParty === 'PSOE') ||
      (politicalParty === 'PP' && computerParty === 'Vox')) {
    prompt('Sois nobios\n');
  } else {
    prompt('Eres subnormal, ¿para qué escoges Ciudadanos?\n');
  }
  
  counter = counter + 1;
  
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Enter a valid input');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'n') {
    prompt('Hope to see you again buddy')
    // convert JSON object to string
    const data = JSON.stringify(resultsCount);
    // write JSON string to a file
    fs.writeFile('politicalResults.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
    break;
  }
}

