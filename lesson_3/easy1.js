// Question 6
/*
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

ages = Object.assign(ages, additionalAges);
console.log(ages);
*/
// Question 7 check answer given

// Question 8
/*
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');
console.log(flintstones);
*/

// Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";

function splitSentence (sentence, word) {
  let sentenceIndex = sentence.indexOf(word);
  let newSentence = sentence.slice(0, sentenceIndex);
  console.log(newSentence);
}

splitSentence(advice, 'house');
