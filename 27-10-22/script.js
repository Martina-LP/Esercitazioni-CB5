// 1. Create a calculator with functions 
// having two numbers and an operator, 
// so return the value

// First approach
const firstNumber = parseFloat(prompt("Inserisci il primo numero: "));
const operator = prompt("Inserisci l'operatore: ");
const secondNumber = parseFloat(prompt("Inserisci il secondo numero: "));
alert("Il risultato è disponibile in console!");

function calc(firstNumber,secondNumber) {
  if (operator === '+') {
    return firstNumber + secondNumber;
  }
  else if (operator === '-') {
    return firstNumber - secondNumber;
  }
  else if (operator === '*') {
    return firstNumber * secondNumber;
  }
  else {
    return firstNumber / secondNumber;
  };
};

// Second approach
// function calc(firstNumber, secondNumber) {

// switch (operator) {
//   case "+":
//     return firstNumber + secondNumber;
//     break;
//   case "-":
//     return firstNumber - secondNumber;
//     break;
//   case "*":
//     return firstNumber * secondNumber;
//     break;
//   case "/":
//     return firstNumber / secondNumber;
//     break;
//   default:
//     alert("Operatore non valido");
//   };
// };

console.log("Il risultato è: " + calc(firstNumber, secondNumber));

// 2. Create an object "character" describing a random character,
// this object must contain at least one method.
// Play with objects, testing methods and properties
const character = { // Object
  name: "Nana", // Property
  surname: "Osaki",
  age: 20,
  job: "vocalist",
  isAlive: true,
  bandName: "Black Stones",
  band: ["Nobu", "Yasu", "Shinichi"],
  lover: {
    firstName: "Ren",
    lastName: "Honjo",
    currentAge: 24,
    currentJob: "guitarist"
  },
  sing: function () {
    return this.name + " " + this.job; // Method

  }
};

console.log("Object:", character);
console.log("Name and Profession:", character.sing());
console.log("Age:", character.age);
console.log("Character's still alive:", character.isAlive);
console.log("Lead vocalist at:", character.bandName);
console.log("Band's guitarist:", character.band[0]);
console.log("Band's drummer:", character.band[1]);
console.log("Band's bassist:", character.band[2]);
console.log("Lover:", character.lover);
console.log("Lover's job:", character.lover.currentJob);
console.log("Keys:", Object.keys(character));
console.log("Values:", Object.values(character));
