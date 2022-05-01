// // "use strict";
// // console.log("hello world");
// // console.log("25");

// // function calcAge1(birthYeah) {
// //   return 2037 - birthYeah;
// // }

// // const age1 = calcAge1(1991);
// // console.log(age1);

// // const calcAge2 = function (birthYeah) {
// //   return 2037 - birthYeah;
// // };

// // const age2 = calcAge2(1991);
// // console.log(age2);

// // const yearsUntilRetirement = (birthyeah, firstName) => {
// //   const age = 2037 - birthyeah;
// //   const retirement = 65 - age;
// //   // return retirement;
// //   return `${firstName} retires in ${retirement}years`;
// // };

// // console.log(yearsUntilRetirement(1991, "jonas"));
// // console.log(yearsUntilRetirement(1980, "bob"));
// // // functions calling other functions

// // function cutFruitPieces(fruit) {
// //   return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges) {
// //   const applePieces = cutFruitPieces(apples);
// //   const orangePieces = cutFruitPieces(oranges);

// //   const juice = `juice with ${applePieces} apples and ${orangePieces}`;
// // //   return juice;
// // // }
// // // console.log(fruitProcessor(2, 3));

// // const calculateAverage = function (score1, score2, score3) {
// //   return (score1 + score2 + score3) / 3;
// // };

// // const scoreDolphins = calculateAverage(44, 23, 71);

// // const scoreKoalas = calculateAverage(65, 54, 49);

// // console.log(scoreDolphins);
// // console.log(scoreKoalas);

// // const checkWinner(scoreDolphins, scoreKoalas){
// //   if ()
// // }

// const calcAverage = function (score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// };

// let averageDoplhins1 = calcAverage(44, 23, 71);
// let averageKoalas1 = calcAverage(65, 54, 49);

// console.log(averageDoplhins1);
// console.log(averageKoalas1);

// function checkwinner(averageD, averageK) {
//   if (averageD >= averageK * 2) {
//     console.log(`Dolphins win🎆🎆🎆🎆 (${averageD} vs ${averageK})`);
//   } else if (averageK >= averageD * 2) {
//     console.log(`Koalas wins 🎇🎇🎇🎇 (${averageK} vs ${averageD})`);
//   } else {
//     console.log("no one wins 😥😓☹😞😢😩😰😭😭😭");
//   }
// }

// checkwinner(averageDoplhins1, averageKoalas1);

// let averageDoplhins2 = calcAverage(85, 54, 41);
// let averageKoalas2 = calcAverage(23, 34, 27);

// checkwinner(averageDoplhins2, averageKoalas2);

// checkwinner(20, 70);

// // ARRAYS

// const friends = ["micheal", "steven", "peter"];

// console.log(friends);

// // const years1 = new Array(1991, 1994, 2008, 2020);
// console.log(friends[2]);

// friends[2] = "jay";
// console.log(friends);

// console.log(friends[2]);

// const jonas = ["jonas", "schmedtmann", 2037 - 1991, "teacher", friends];

// console.log(jonas);

// //exercise

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// calcAge(years);

// // array methods

// // add elements at the end of array

// const newLength = friends.push("sandra");
// console.log(friends);

// // add elements at begining of array
// friends.unshift("john");
// console.log(friends);

// // remove last element from array
// friends.pop();
// console.log(friends);

// friends.pop();
// console.log(friends);

// // remove first element from array
// friends.shift();
// console.log(friends);

// // how to know location of an element
// console.log(friends.indexOf("steven"));
// console.log(friends.indexOf("bob"));

// // how to check wether an element exists in the array
// console.log(friends.includes("steven"));
// console.log(friends.includes("bob"));

const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// OBJECTS

const jonas = {
  firstName: "jonas",
  lastName: "schmedtmann",
  middleName: "kamagu",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
};

console.log(jonas);

// console.log(
//   jonas.firstName +
//     " has 3 friends, and his best friend is called " +
//     friends.friends[0]
// );
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]} `
);

// objects methods
console.log(jonas["age"]);
console.log(jonas["lastName"]);
console.log(jonas["friends"]);

const iconTag = "Name";

console.log(
  `${jonas["first" + iconTag]} is my first name ${
    jonas["last" + iconTag]
  } is my second name and ${
    jonas["middle" + iconTag]
  } is my middle name and i am aged ${jonas["age"]}`
);

console.log(jonas["first" + iconTag]);
console.log(jonas["middle" + iconTag]);

// const intrestedIn = prompt(
// //   "what do you want to know about jonas? Choose between firstName, lastName, middleName, age, job and friends"
// // );

// // console.log(jonas[intrestedIn]);

// if (jonas[intrestedIn]) {
//   console.log(jonas[intrestedIn]);
// } else {
//   console.log(
//     "wrong request! choose between firstName, lastName, middleName, age, job and friends"
//   );
// }

jonas.location = "uganda";
jonas["twitter"] = "common";

console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length}, anh his best friend is called ${jonas.friends[0]}`
);

// 45min
