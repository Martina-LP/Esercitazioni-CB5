// Array including name, surname, age and education
let myData = [
  "Martina",
  "La Porta",
  34,
  "Diploma"
];

// 1. Remove age
// myData.splice(2, 1);

// console.log(myData);

// 2. Insert date of birth to replace age
// myData.splice(2, 1, "08/02/1988");

// console.log(myData);

// 3. Edit name and surname to UpperCase
myData[0] = myData[0].toUpperCase();
myData[1] = myData[1].toUpperCase();

console.log(myData);

// Create a right triangle
let line = 7;
let string = "";
for (let i = 0; i < line; i++) {
  for (let j = 0; j < line - i; j++) {
    string += "#";
  }
  string += "\n";
};

console.log(string);
