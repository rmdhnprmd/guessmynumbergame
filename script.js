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

document.querySelector('.check').onclick = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no inout
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤮🤮🤮 You Lost!!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#B33C36';
      document.querySelector('.number').textContent = '💩';
    }

    // when guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🤮🤮🤮 You Lost HAHAHA!!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#B33C36';
      document.querySelector('.number').textContent = '💩';
    }
  }
};

document.querySelector('.again').onclick = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start gussing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
