/* String
const what = "Nicolas";
*/

/* Boolean
const what = false;
*/
/* Number
const what = 666;
*/
/* Float
const what = 55.1;
console.log(what);
*/
/*
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);
*/
/*
const daysOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "true",
  true,
  55
];

//console.log(daysOfWeek);
console.log(daysOfWeek[4]);
*/
/*
const nicoInfo = ["Nicolas", "55", true, "Seoul"];
console.log(nicoInfo);
*/
/*
const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Cheese burger", fatty: true }
  ]
};
console.log(nicoInfo.gender);
nicoInfo.gender = "Female";
console.log(nicoInfo.gender);
console.log(nicoInfo.favFood[0].name);
console.log(console);
*/
/*
console.log("Grettings Nicolas");
console.log("Hello Jun");
console.log("Hello Liyn");
console.log("Hello Dal");
*/
/*
function sayHello() {
  console.log("Hello!");
}
sayHello();
sayHello("Nicolas");
*/
/*
function sayHello(name, age) {
  console.log("Hello!", name, "you have", age, "years of age.");
}
sayHello("Nicolas", "15");
console.log(console);
*/
/*
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old.`);
}
sayHello("Nicolas", 15);
*/
/*
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old.`);
}
const greetNicolas = sayHello("Nicolas", 14);

console.log(greetNicolas);
*/
/*
function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old.`;
}
const greetNicolas = sayHello("Nicolas", 14);

console.log(greetNicolas);
*/

const calculater = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  }
};

const plus = calculater.plus(5, 5);
const minus = calculater.minus(5, 5);

console.log(plus, minus);
