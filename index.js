// "use strict";
// console.log("hello world");
// console.log("25");

// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// const yearsUntilRetirement = (birthyeah, firstName) => {
//   const age = 2037 - birthyeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}years`;
// };

// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1980, "bob"));
// // functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} apples and ${orangePieces}`;
// //   return juice;
// // }
// // console.log(fruitProcessor(2, 3));

// const calculateAverage = function (score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// };

// const scoreDolphins = calculateAverage(44, 23, 71);

// const scoreKoalas = calculateAverage(65, 54, 49);

// console.log(scoreDolphins);
// console.log(scoreKoalas);

// const checkWinner(scoreDolphins, scoreKoalas){
//   if ()
// }

const calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

let averageDoplhins1 = calcAverage(44, 23, 71);
let averageKoalas1 = calcAverage(65, 54, 49);

console.log(averageDoplhins1);
console.log(averageKoalas1);

function checkwinner(averageD, averageK) {
  if (averageD >= averageK * 2) {
    console.log(`Dolphins win🎆🎆🎆🎆 (${averageD} vs ${averageK})`);
  } else if (averageK >= averageD * 2) {
    console.log(`Koalas wins 🎇🎇🎇🎇 (${averageK} vs ${averageD})`);
  } else {
    console.log("no one wins 😥😓☹😞😢😩😰😭😭😭");
  }
}

checkwinner(averageDoplhins1, averageKoalas1);

let averageDoplhins2 = calcAverage(85, 54, 41);
let averageKoalas2 = calcAverage(23, 34, 27);

checkwinner(averageDoplhins2, averageKoalas2);

checkwinner(20, 70);

// ARRAYS
