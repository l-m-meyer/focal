/*
* Function takes in a single string as a command line argument and
* prints out an obfuscated version of that password.
* @param {String} command line argument
* @result {String} obfuscated string
*/
const obfuscate = str => {
  let obfuscated = '';
  for (const letter of str) {
    switch (letter) {
    case 'a':
      obfuscated += '4';
      break;
    case 'e':
      obfuscated += '3';
      break;
    case 'o':
      obfuscated += '0';
      break;
    case 'l':
      obfuscated += '1';
      break;
    default:
      obfuscated += letter;
    }
  } return obfuscated;
};

// retrieve command line argument and convert to a String
const arg = String(process.argv.slice(2));

console.log(obfuscate(arg));