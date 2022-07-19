'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

// use event handler
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number!';
//   }
// });

// use global event target

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayScore = scoreInput =>
  (document.querySelector('.score').textContent = scoreInput);

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

const backgroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

const numberWidth = width =>
  (document.querySelector('.number').style.width = width);

document.querySelector('.check').onclick = function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // when player wins/guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    displayNumber(secretNumber);

    backgroundColor('#60b347');
    numberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // when guess incorrect
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('🤮🤮🤮 You LOST..!!!');
      displayScore(0);
      backgroundColor('#B33C36');
      displayNumber('💩');
    }
  } // when guess too high

  //   else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤮🤮🤮 You Lost!!!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#B33C36';
  //     document.querySelector('.number').textContent = '💩';
  //   }
  // } // when guess too low
  //   else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '🤮🤮🤮 You Lost HAHAHA!!!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#B33C36';
  //     document.querySelector('.number').textContent = '💩';
  //   }
  // }
};

document.querySelector('.again').onclick = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayNumber('?');
  displayMessage('Start gussing...');
  displayScore(score);
  document.querySelector('.guess').value = '';

  backgroundColor('#222');
  numberWidth('15rem');
};
