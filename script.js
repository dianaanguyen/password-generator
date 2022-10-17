var generateBtn = document.querySelector("#generate"); // Assignment Code

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Alphabet, Numbers, Special Characters
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const lowercase = uppercase.map((letter) => letter.toLowerCase());
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=", ",", ";", ":", "~"];
var userCriteria; // used to store arrays of criteria choices combines

function generatePassword() { // Write password to the #password input
  var password = start ();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Function to generate password
function start() {
  var passwordLength = prompt("How many characters do you want in the password? (Between 8-128 characters)");
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert ("Great! Now pick at least one of the next 4 criterias.");
    var userUpperCase = prompt("Would you like to include uppercase letters? Type 1 for yes and 0 for no.");
    var userLowerCase = prompt("Would you like to include lowercase letters? Type 1 for yes and 0 for no.");
    var userNumbers = prompt("Would you like to include numbers? Type 1 for yes and 0 for no.");
    var userSpecial = prompt("Would you like to include special characters? Type 1 for yes and 0 for no.");

    if (userUpperCase === "0" && userLowerCase === "0" && userNumbers === "0" && userSpecial=== "0") {
      alert("You have to choose at least one criteria. Please try again."); 

    } else if (userUpperCase === "1" && userLowerCase === "1" && userNumbers === "1" && userSpecial === "1") {
      userCriteria = uppercase.concat(lowercase, numbers, specialChars);

    } else if (userUpperCase === "1" && userLowerCase === "1") {
      userCriteria = uppercase.concat(lowercase);

    } else if (userUpperCase ==="1" && userNumbers === "1") {
      userCriteria = uppercase.concat(numbers);

    } else if (userUpperCase === "1" && userSpecial === "1") {
      userCriteria = uppercase.concat(specialChars);

    } else if (userLowercase === "1" && userNumbers === "1") {
      userCriteria = lowercase.concat(numbers);

    } else if (userNumbers === "1" && userSpecial === "1") {
      userCriteria = numbers.concat(specialChars);

    } else if (userUpperCase === "1" && userLowerCase === "1" && userNumbers === "1"){
      userCriteria = uppercase.concat(lowercase, numbers);

    } else if (userUpperCase === "1" && userLowerCase === "1" && userSpecial === "1"){
      userCriteria = uppercase.concat(lowercase, specialChars);

    } else if (userLowerCase === "1" && userNumbers === "1" && userSpecial === "1") {
      userCriteria = lowercase.concat(numbers, specialChars);

    } else if (userSpecial === "1" && userNumbers === "1" && userUpperCase === "1") {
      userCriteria = specialChars.concat(numbers, uppercase);

    } else if (userUpperCase === "1") {
      userCriteria = uppercase;

    } else if (userLowerCase === "1") {
      userCriteria = lowercase;

    } else if (userNumbers === "1") {
      userCriteria = numbers;

    } else if (userSpecial === "1") {
      userCriteria = specialChars;
    }
    var newPassword = []; 
    for (var i = 0; i < passwordLength; i++) {
    var pickChoices = userCriteria[Math.floor(Math.random() * userCriteria.length)];
    newPassword.push(pickChoices);
    }
    var joinPassword = newPassword.join("");
    return joinPassword;

  } else {
    alert ("You did not type in a number between 8 and 128. Please try again."); // Will end function if user does not put a # btwn 8-128
    return "Please type in a number between 8 and 128.";
  }
}