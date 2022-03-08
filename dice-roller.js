/*
* Program takes a single parameter from the command line, a number, and rolls that many six-sided dice.
* @param {Number} a single command line argument, a number
* @result {String} "Rolled n dice: n"
*/

// retrieve command line argument and store value
const arg = process.argv;
const n = arg.slice(2);

// generate a random number n times, helper function
// store as an array and return random number n times

// 