//Q1
//The output are different since in the second case, JS inserts semicolons after the return statement and then it returns undefined.

//Q3
//A = 2,3,2
//B = 

//Q4

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    console.log("This is an invalid input!");
    return false;
  } else {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress("1.2.3.255"));