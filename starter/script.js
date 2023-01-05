document.querySelector("#generate").addEventListener("click", writePassword);

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Variable declaration
var length = "";
var special;
var numbers;
var uppercase;
var lowercase;

// Function to prompt user for password options
function getPasswordOptions() {
  var length = (prompt("How many characters would you like your password to contain? You can choose a length between 10 and 64 characters."));

  // Check if the value is outside the parameters we want.
  while(length < 10 || length > 64) {
    alert("Password length must be between 10-64 characters. Try it again");
    var length = (prompt("How many characters would you like your password to contain? You can choose a length between 10 and 64 characters."));
    } 
  
  // Check which character type the user wants to use.
  var special = confirm("Click OK to confirm if you would like to include special characters");
  var numbers = confirm("Click OK to confirm if you would like to include numeric characters");    
  var lowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var uppercase = confirm("Click OK to confirm if you would like to include uppercase characters");

  // Check if his or her preference is valid.
  while(uppercase === false && lowercase === false && special === false && numbers === false) {
    alert("You must choose at least one parameter");
    var special = confirm("Click OK to confirm if you would like to include special characters");
    var numbers = confirm("Click OK to confirm if you would like to include numeric characters");    
    var lowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var uppercase = confirm("Click OK to confirm if you would like to include uppercase characters");  
  }

  var passwordCharacters = []
  if (passwordCharacters === special) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  } 
  if (passwordCharacters === numbers) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  } 
  if (passwordCharacters === lowercase) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
  }
  if (passwordCharacters === uppercase) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters);
  }

  console.log(passwordCharacters);
}

// Function for getting a random element from an array
function getRandom(array) {
  array[Math.floor(Math.random() * array.length)];
}

// Function to generate password with user input
function generatePassword() {
  var passwordName = "";
  for (let i = 0; i <= length; i++) {
    password =+ getRandom(passwordCharacters);
    console.log(passwordName);
  }
  return passwordName;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);