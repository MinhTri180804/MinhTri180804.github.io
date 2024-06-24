'use strict';

// Element button
const buttonCheck = document.querySelector('button.check');
const buttonAgain = document.querySelector('button.again');

// Element Input
const inputNumber = document.querySelector('.guess');

// Element show
const messageResult = document.getElementById('message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const numberResult = document.querySelector('.number');
const body = document.body;

// Define default variable
let result = randomNumber();

// Define most functions using in application

// Function random result number
function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

// Function display message when user play game
function displayMessage(message) {
  messageResult.textContent = message;
}

// Function handle process when user click button check in application
const handleCheck = function () {
  const valueInput = Number(inputNumber.value);
  let scoreValue = Number(score.textContent);
  let highScoreValue = Number(highScore.textContent);

  // Validate empty value input number
  if (!valueInput) {
    alert('value input not empty');
    return;
  }

  // handle when input value user less than 1
  if (valueInput < 1) {
    alert('value input less than 1');
    inputNumber.value = undefined;
    return;
  }

  // Handle when input value user input greater than 20
  if (valueInput > 20) {
    alert('value input greater than 20');
    inputNumber.value = undefined;
    return;
  }

  // Handle when value user input not equal to result random
  if (valueInput !== result) {
    --scoreValue;
    score.textContent = String(scoreValue);
    // handle when user have error is 0 an it is lost
    if (scoreValue === 0) {
      alert('You lost');
      return;
    }

    // handle message when input value user less than result
    if (valueInput < result) {
      displayMessage('To less than result');
      return;
    }

    // handle message when input value user greater than result
    if (valueInput > result) {
      displayMessage('To greater than result');
      return;
    }
  }

  displayMessage('You win 🏆');
  body.style.backgroundColor = '#60b347';
  numberResult.textContent = result;

  // handle compare score current with highScore
  if (scoreValue > highScoreValue) {
    highScore.textContent = scoreValue;
  }
};

// Function handle process when user click button again in application
const handleAgain = function () {
  // Reset all
  displayMessage('Start guessing...');
  body.style.backgroundColor = '#222';
  numberResult.textContent = '?';
  score.textContent = '20';
  inputNumber.value = undefined;
  result = randomNumber();
};

function application() {
  buttonCheck.addEventListener('click', handleCheck);

  buttonAgain.addEventListener('click', handleAgain);
}

application();
