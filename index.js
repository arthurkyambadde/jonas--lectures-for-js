// // // "use strict";
// // // console.log("hello world");
// // // console.log("25");

// // // function calcAge1(birthYeah) {
// // //   return 2037 - birthYeah;
// // // }

// // // const age1 = calcAge1(1991);
// // // console.log(age1);

// // // const calcAge2 = function (birthYeah) {
// // //   return 2037 - birthYeah;
// // // };

// // // const age2 = calcAge2(1991);
// // // console.log(age2);

// // // const yearsUntilRetirement = (birthyeah, firstName) => {
// // //   const age = 2037 - birthyeah;
// // //   const retirement = 65 - age;
// // //   // return retirement;
// // //   return `${firstName} retires in ${retirement}years`;
// // // };

// // // console.log(yearsUntilRetirement(1991, "jonas"));
// // // console.log(yearsUntilRetirement(1980, "bob"));
// // // // functions calling other functions

// // // function cutFruitPieces(fruit) {
// // //   return fruit * 4;
// // // }

// // // function fruitProcessor(apples, oranges) {
// // //   const applePieces = cutFruitPieces(apples);
// // //   const orangePieces = cutFruitPieces(oranges);

// // //   const juice = `juice with ${applePieces} apples and ${orangePieces}`;
// // // //   return juice;
// // // // }
// // // // console.log(fruitProcessor(2, 3));

// // // const calculateAverage = function (score1, score2, score3) {
// // //   return (score1 + score2 + score3) / 3;
// // // };

// // // const scoreDolphins = calculateAverage(44, 23, 71);

// // // const scoreKoalas = calculateAverage(65, 54, 49);

// // // console.log(scoreDolphins);
// // // console.log(scoreKoalas);

// // // const checkWinner(scoreDolphins, scoreKoalas){
// // //   if ()
// // // }

// // const calcAverage = function (score1, score2, score3) {
// //   return (score1 + score2 + score3) / 3;
// // };

// // let averageDoplhins1 = calcAverage(44, 23, 71);
// // let averageKoalas1 = calcAverage(65, 54, 49);

// // console.log(averageDoplhins1);
// // console.log(averageKoalas1);

// // function checkwinner(averageD, averageK) {
// //   if (averageD >= averageK * 2) {
// //     console.log(`Dolphins win🎆🎆🎆🎆 (${averageD} vs ${averageK})`);
// //   } else if (averageK >= averageD * 2) {
// //     console.log(`Koalas wins 🎇🎇🎇🎇 (${averageK} vs ${averageD})`);
// //   } else {
// //     console.log("no one wins 😥😓☹😞😢😩😰😭😭😭");
// //   }
// // }

// // checkwinner(averageDoplhins1, averageKoalas1);

// // let averageDoplhins2 = calcAverage(85, 54, 41);
// // let averageKoalas2 = calcAverage(23, 34, 27);

// // checkwinner(averageDoplhins2, averageKoalas2);

// // checkwinner(20, 70);

// // // ARRAYS

// // const friends = ["micheal", "steven", "peter"];

// // console.log(friends);

// // // const years1 = new Array(1991, 1994, 2008, 2020);
// // console.log(friends[2]);

// // friends[2] = "jay";
// // console.log(friends);

// // console.log(friends[2]);

// // const jonas = ["jonas", "schmedtmann", 2037 - 1991, "teacher", friends];

// // console.log(jonas);

// // //exercise

// // const calcAge = function (birthYeah) {
// //   return 2037 - birthYeah;
// // };

// // const years = [1990, 1967, 2002, 2010, 2018];

// // calcAge(years);

// // // array methods

// // // add elements at the end of array

// // const newLength = friends.push("sandra");
// // console.log(friends);

// // // add elements at begining of array
// // friends.unshift("john");
// // console.log(friends);

// // // remove last element from array
// // friends.pop();
// // console.log(friends);

// // friends.pop();
// // console.log(friends);

// // // remove first element from array
// // friends.shift();
// // console.log(friends);

// // // how to know location of an element
// // console.log(friends.indexOf("steven"));
// // console.log(friends.indexOf("bob"));

// // // how to check wether an element exists in the array
// // console.log(friends.includes("steven"));
// // console.log(friends.includes("bob"));

// const calcTip = function (billValue) {
//   return billValue >= 50 && billValue <= 300
// ? billValue * 0.15
//     : billValue * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// // OBJECTS

// const jonas = {
//   firstName: "jonas",
//   lastName: "schmedtmann",
//   middleName: "kamagu",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "steven"],
// };

// console.log(jonas);

// // console.log(
// //   jonas.firstName +
// //     " has 3 friends, and his best friend is called " +
// //     friends.friends[0]
// // );
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]} `
// );

// // objects methods
// console.log(jonas["age"]);
// console.log(jonas["lastName"]);
// console.log(jonas["friends"]);

// const iconTag = "Name";

// console.log(
//   `${jonas["first" + iconTag]} is my first name ${
//     jonas["last" + iconTag]
//   } is my second name and ${
//     jonas["middle" + iconTag]
//   } is my middle name and i am aged ${jonas["age"]}`
// );

// console.log(jonas["first" + iconTag]);
// console.log(jonas["middle" + iconTag]);

// // const intrestedIn = prompt(
// // //   "what do you want to know about jonas? Choose between firstName, lastName, middleName, age, job and friends"
// // // );

// // // console.log(jonas[intrestedIn]);

// // if (jonas[intrestedIn]) {
// //   console.log(jonas[intrestedIn]);
// // } else {
// //   console.log(
// //     "wrong request! choose between firstName, lastName, middleName, age, job and friends"
// //   );
// // }

// jonas.location = "uganda";
// jonas["twitter"] = "common";

// console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length}, anh his best friend is called ${jonas.friends[0]}`
// );

// // 45min

// const jonas = {
//   firstName: "jonas",
//   lastName: "schmedtmann",
//   middleName: "kamagu",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "steven"],
//   hasDriverLicense: true,

//   // calcAge: function (birthYeah) {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // },

//   calcAge: function () {
//     this.age = 2017 - this.birthYeah;
//     return this.age;
//   },
// };

// console.log(jonas);
// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// console.log(mark.BMI);

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//   },
// };

// john.calcBMI();
// console.log(john.BMI);

// // LOOPS

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// FOR LOOPS
// for(initial value; logical condition; update the counter after each iteration )

// const jonas = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michel", "peter", "steven"],
//   true,
// ];

// const types = [];

// // for (let i = 0; 1 < 5; i++) {
// //   console.log(jonas[i]);
// // }
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   // adding an element to the jonas array called types

//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // const years2 = [2040, 2070, 2050, 2060];

// // const ages2 = [];

// // for (let i = 0; i < years2.length; i++) {
// //   ages2.push(2090 - years[i]);
// // }

// // console.log(ages2);
// // continue and break statments

// console.log("------only strings------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("------break when number is found------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] == "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michel", "peter", "steven"],
//   true,
// ];

// // looping backwards
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// // creating a loop inside a loop

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`---starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
//   }
// }

// while loops
let rep = 1;
while (rep <= 10) {
  console.log(`lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`loop is about to end.....`);
  }
}

// CHALLENGE

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {}
