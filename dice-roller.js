/*
* Program takes a single parameter from the command line, a number, and rolls that many six-sided dice.
* @param {Number} a single command line argument, a number
* @result {String} "Rolled n dice: n"
*/


// generate a random number n times, helper function
// store as an array and return random number n times
const randomNum = n => {
  const arr = [];
  
  while (arr.length < n){
    let random = Math.floor(Math.random() * 6 + 1);
    arr.push(random);
  }
  return arr.join('').split('').join(', ');
};

// retrieve command line argument and store value
const arg = process.argv;
let n = arg.slice(2);

console.log(`Rolled ${n} dice: ${randomNum(n)}`);




// 