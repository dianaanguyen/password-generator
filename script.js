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

// Alphabet, Numbers, Special Characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = uppercase.map((letter) => letter.toLowerCase());
var numbers = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")", "-", "_", "+", "=", "[","]", "{","}", "|", ",", ";", ":", "~"];

//Function to generate password
function generatePassword () {
  var passwordLength = prompt ("How many characters do you want in the password? (Between 8-128 characters)");
  var useUpperCase = prompt ("Would you like to include uppercase letters? Type 1 for yes and 0 for no.");
  var useLowercase = prompt ("Would you like to include lowercase letters? Type 1 for yes and 0 for no.");
  var useNumbers = prompt ("Would you like to include numbers? Type 1 for yes and 0 for no.");
  var useSpecialChars = prompt ("Would you like to include special characters? Type 1 for yes and 0 for no.")
} 
if (passwordLength <= 7 || passwordLength >= 129 ){
    alert ("You did not type in s number between 8 and 128, please choose again. ")
  }