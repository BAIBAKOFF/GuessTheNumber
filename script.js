'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);
  // No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Enter the number';
    //Player Won
    displayGuessMessage('Enter the number');
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('RIGHT');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Number from input is wrongh
  } else if (guessingNumber !== secretNumber) {
    //Too high
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        displayGuessMessage(
          guessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало'
        );
      score = score - 1; //score --
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Проиграл');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(255, 3, 3)';
    }
  }
});
//     //Too low
//   } else if (guessingNumber < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Слишком мало';
//       score = score - 1; //score --
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.guess-message').textContent = 'Проиграл';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'rgb(255, 3, 3)';
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
});
