var generateBtn = document.querySelector("#generate"); // Assignment Code

function generatePassword() { // Write password to the #password input
  var password = start ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Alphabet, Numbers, Special Characters
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = uppercase.map((letter) => letter.toLowerCase());
const numbers = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")", "-", "_", "+", "=", "[","]", "{","}", "|", ",", ";", ":", "~"];
var userCriteria; // used to store arrays of criteria choices combines

//Function to generate password
function start() {
  var passwordLength = prompt("How many characters do you want in the password? (Between 8-128 characters)");
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert ("Great! Now pick at least one of the next 4 criterias.");
    var useUpperCase = prompt("Would you like to include uppercase letters? Type 1 for yes and 0 for no.");
    var useLowercase = prompt("Would you like to include lowercase letters? Type 1 for yes and 0 for no.");
    var useNumbers = prompt("Would you like to include numbers? Type 1 for yes and 0 for no.");
    var useSpecial = prompt("Would you like to include special characters? Type 1 for yes and 0 for no.");

    if (useUpperCase === "0" && useLowerCase === "0" && useNumbers === "0" && useSpecial=== "0") {
      alert("You have to choose at least one criteria. Please try again."); 

    } else if (useUpperCase === "1" && useLowerCase === "1" && useNumbers === "1" && useSpecial === "1") {
      userCriteria = uppercase.concat(lowercase, numbers, specialChars);

    } else if (useUpperCase === "1" && useLowerCase === "1") {
      userCriteria = uppercase.concat(lowercase);

    } else if (useUpperCase ==="1" && useNumbers === "1") {
      userCriteria = uppercase.concat(numbers);

    } else if (useUpperCase === "1" && useSpecial === "1") {
      userCriteria = uppercase.concat(specialChars);

    } else if (useLowercase === "1" && useNumbers === "1") {
      userCriteria = lowercase.concat(numbers);

    } else if (useNumbers === "1" && useSpecial === "1") {
      userCriteria = numbers.concat(specialChars);

    } else if (useUpperCase === "1" && useLowerCase === "1" && useNumbers === "1"){
      userCriteria = uppercase.concat(lowercase, numbers);

    } else if (useUpperCase === "1" && useLowerCase === "1" && useSpecial === "1"){
      userCriteria = uppercase.concat(lowercase, specialChars);

    } else if (useLowerCase === "1" && useNumbers === "1" && useSpecial === "1") {
      userCriteria = lowercase.concat(numbers, specialChars);

    } else if (useSpecialChars === "1" && useNumbers === "1" && useUpperCase === "1") {
      userCriteria = special.concat(numbers, uppercase);

    } else if (useUpperCase === "1") {
      userCriteria = uppercase;

    } else if (useLowerCase === "1") {
      userCriteria = lowercase;

    } else if (useNumbers === "1") {
      userCriteria = numbers;

    } else if (useSpecial === "1") {
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
