
// Fetch API users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((nameAddress) => nameAddress.map((obj) => console.log("L'utente " + obj.name, "abita in via: " + JSON.stringify(obj.address), "a " + (obj.address.city) + ".")))
  .catch((e) => console.log("Warning:", + e))
  .finally(() => console.log("End"));

// Fetch API todos

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((idTitle) => idTitle.map((obj) => console.log("L'oggetto numero " + obj.id, "s'intitola: " + obj.title + ".")))
//   .catch((e) => console.log("Warning:", + e))
//   .finally(() => console.log("End"));