// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Password Generator will provide a password with 8-50 characters based on the criteria 

// Assignment code plus Event Listener to prompt questions when the button is pushed
document.querySelector("#generate").addEventListener("click", writePassword);


// Different combinations of Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "?", "/", "."];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Var Declarations
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like in your password?"));

    // Loop if the answer will be outside of the parameters
    while(confirmLength <= 7 || confirmLength >= 51) {
        alert("Password length must be between 8-50 characters Try again");
        var confirmLength = (prompt("How many characters would you like in your password?"));
    }

    // Repeat back how many characters the user will have
    alert('Your password will have ${confirmLength} characters');

    













}

