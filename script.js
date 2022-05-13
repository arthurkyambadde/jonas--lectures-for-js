// 'use strict';

// //LEARNING DOM MANIPULATION

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number 😎';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 14;

// document.querySelector('.number').textContent = 17;

// document.querySelector('.guess').value;
// console.log(document.querySelector('.guess').value);

//HANDLING CLICK EVENTS
// CLICK EVENTS
('use strict');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!🚩🚨 ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number 🤩😍🥰🎇 ';
    score = score + 1;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Too high bro come on 😴😴';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game! 😏😭😭';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Too low bro come on 😑😥😪';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent =
      'You have lost the game! 😏😭😭';
    document.querySelector('.score').textContent = 0;
  }
});
