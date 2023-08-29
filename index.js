const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>', '.', '?', '/'];

// Get the GENERATE PASSWORD button from HTML
let generatePassword = document.getElementById('generate-password');

// Get the blank spaces from HTML where the passwords will be printed
let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');

// Determines the length of the password
let passwordLength = 15;

// Generates ONE random element from the array
function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

// Generates 15 random elements from the array (because it applies the 'passwordLength' )
function generateRandomPassword() {
  let randomPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

// By 'clicking' on GENERATE PASSWORD it runs the above functions and print the 2 passwords in the blank spaces
generatePassword.addEventListener('click', function printCharacters() {
  passwordOne.textContent = generateRandomPassword();
  passwordTwo.textContent = generateRandomPassword();
});
