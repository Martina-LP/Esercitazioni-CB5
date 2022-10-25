
const firstNumber = parseFloat(prompt("Inserisci il primo numero: "));
const operator = prompt("Inserisci l'operatore (+, -, *, /): ");
const secondNumber = parseFloat(prompt("Inserisci il secondo numero: "));
let result;
alert("Il risultato è disponibile in console!");

// if... else if... else
if (operator == '+') {
  result = firstNumber + secondNumber;
}
else if (operator == '-') {
  result = firstNumber - secondNumber;
}
else if (operator == '*') {
  result = firstNumber * secondNumber;
}
else {
  result = firstNumber / secondNumber;
};

console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);

// switch
// switch(operator) {
//   case '+':
//     result = firstNumber + secondNumber;
//     console.log(`${firstNumber} + ${secondNumber} = ${result}`);
//     break;

//   case '-':
//     result = firstNumber - secondNumber;
//     console.log(`${firstNumber} - ${secondNumber} = ${result}`);
//     break;

//   case '*':
//     result = firstNumber * secondNumber;
//     console.log(`${firstNumber} * ${secondNumber} = ${result}`);
//     break;

//   case '/':
//     result = firstNumber / secondNumber;
//     console.log(`${firstNumber} / ${secondNumber} = ${result}`);
//     break;

//   default:
//     console.log("Operatore non valido");
//     break;
// };
