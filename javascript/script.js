import { characters } from './data-simple.js';

const generatePasswordBtn = document.getElementById('generate-password-btn');
const passwordOneEl = document.getElementById('password-one');
const passwordTwoEl = document.getElementById('password-two');

const maxCharacters = 15;

generatePasswordBtn.addEventListener('click', renderPassword);
passwordOneEl.addEventListener('click', copyText);
passwordTwoEl.addEventListener('click', copyText);

function getRandomCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];

  /* Before refactoring:
let randomCharacter = Math.floor(Math.random() * characters.length);
return characters[randomCharacter]; */
}

function getRandomPassword() {
  let randomPassword = '';
  for (let i = 0; i < maxCharacters; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function renderPassword() {
  passwordOneEl.textContent = getRandomPassword();
  passwordTwoEl.textContent = getRandomPassword();
}
// Copy the text inside the text field
function copyText(e) {
  navigator.clipboard.writeText(e.target.textContent);

  alert('Password has been copied.');
}
