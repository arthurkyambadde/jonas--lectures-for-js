'use strict';

//LEARNING DOM MANIPULATION

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number 😎';

console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 14;

document.querySelector('.number').textContent = 17;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
