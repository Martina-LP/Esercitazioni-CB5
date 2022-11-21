// Leggere cmd da console ed effettuare l’operazione richiesta: 
// "node calc.js somma 4 5"
// per somma, sottrazione, moltiplicazione, divisione.
// Stampare a schermo il risultato.
// Validare gli argomenti:
// node calc.js divisione  4 0.

const myArgv = process.argv.slice(2);
const op = myArgv[0];
const num1 = parseFloat(myArgv[1]);
const num2 = parseFloat(myArgv[2]);

// If statement
// if (op === "addiction") {
//   console.log("The result of the " + op + " is: " + (num1 + num2));
// } else if (op === "subtraction") {
//   console.log("The result of the " + op + " is: " + (num1 - num2));
// } else if (op === "multiplication") {
//   console.log("The result of the " + op + " is: " + (num1 * num2));
// } else if (op === "division") {
//   if (num2 === 0) {
//     console.log("Error");
//   } else console.log("The result of the " + op + " is: " + (num1 / num2));
// };

// Switch statement
switch (op) {
  case "addiction":
    console.log("The result of the " + op + " is: " + (num1 + num2));
    break;
  case "subtraction":
    console.log("The result of the " + op + " is: " + (num1 - num2));
    break;
  case "multiplication":
    console.log("The result of the " + op + " is: " + (num1 * num2));
    break;
  case "division":
    if (num2 === 0) {
      console.log("Error");
      break;
    } else console.log("The result of the " + op + " is: " + (num1 / num2));
    break;
};
