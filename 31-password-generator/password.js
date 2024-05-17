const resPassword = document.getElementById('password');
const inputLength = document.getElementById('length');
const inputUppercase = document.getElementById('uppercase');
const inputLowercase = document.getElementById('lowercase');
const inputNumbers = document.getElementById('numbers');
const inputSymbols = document.getElementById('symbols');
const btnCopy = document.getElementById('copy');
const btnGenerate = document.getElementById('generate');

btnGenerate.addEventListener('click', () => {
  generatePassword(+inputLength.value, inputUppercase.checked, inputLowercase.checked, inputNumbers.checked, inputSymbols.checked);
});

btnCopy.addEventListener('click', () => {
  if(!resPassword.innerText) return;

  navigator.clipboard.writeText(resPassword.innerText);

  alert('Password copied!');
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  if (!uppercase && !lowercase && !numbers && !symbols || length < 4) {
    alert('The password must have at least 4 characters and at least one type of character checked');
    return;
  }

  let password = '';

  for (let i = 0; i < length;) {
    if(uppercase) {
      password += String.fromCharCode(randomNumber(26, 65));
      i++;
    }
    if(lowercase) {
      password += String.fromCharCode(randomNumber(26, 97));
      i++;
    }
    if(numbers) {
      password += String.fromCharCode(randomNumber(10, 48));
      i++;
    }
    if(symbols) {
      password += String.fromCharCode(randomNumber(13, 35));
      i++;
    }
  }

  resPassword.innerText = password.slice(0, length);
}

function randomNumber(amount, rangeStart) {
  return Math.floor((Math.random() * (amount - 1)) + rangeStart);
}