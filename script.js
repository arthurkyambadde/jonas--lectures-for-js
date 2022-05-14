'use strict';

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
// ('use strict');

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

// let score = 20;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!🚩🚨 ';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'correct Number 🤩😍🥰🎇 ';
//     score = score + 1;
//     document.querySelector('.score').textContent = score;
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Too high bro come on 😴😴';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'You have lost the game! 😏😭😭';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Too low bro come on 😑😥😪';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     }
//   } else {
//     document.querySelector('.message').textContent =
//       'You have lost the game! 😏😭😭';
//     document.querySelector('.score').textContent = 0;
//   }
// });

//MANIPULATING CSS STYLES

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!🚩🚨 ';

    //WHEN THE PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'correct number 😎';
    displayMessage('correct number 😎');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = 'correct Number 🤩😍🥰🎇 ';
    score = score + 1;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      // document.querySelector('.highScore').textContent = highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //WHEN GUESS IS HIGHER THAN SECRET NUMBER
  else if (guess > secretNumber) {
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
  }

  //WHEN GUESS IS LOWER THAN SECRET NUMBER
  else if (guess < secretNumber) {
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

//CODING CHALLENGE 'AGAIN BTN'

document.querySelector('.again').addEventListener('click', function () {
  //ON CLICKING AGAIN BTN

  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing ...';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});
