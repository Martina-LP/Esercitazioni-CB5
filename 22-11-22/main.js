// 1. Trasformo la calcolatrice in un modulo da importare nel progetto.
// 2. Creo un server utilizzando "const http = require('http');  const url = require('url');"."
// 3. Creo le rotte per somma, sottrazione, moltiplicazione e divisione.
// 4. Valido i parametri.
// EXTRA
// 5. Creo la pagina somma contenente due input, un pulsante e un campo per visualizzare il risultato. Inserendo i due valori numerici 
// e cliccando sul pulsante "SOMMA" invia una richiesta in AJAX per il calcolo della somma e stampa il valore nell'apposito campo.
// 6. Creo le pagine per le funzioni  sottrazione, moltiplicazione e divisione.
// 7. Modifico la pagina calcolatrice, inserendo un pulsante per ogni operazione che porta alla rispettiva pagina.

import { somma, sottrazione, moltiplicazione, divisione } from "./calc.js";
import { ce, qs, GET } from "./utils.js";
import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {
  const my_url = url.parse(req.url, true).pathname;
  const params = url.parse(req.url, true).query;
  const { param1, param2 } = params;
  // console.log(param1, param2);

  switch(my_url) {
    case "/home":
      res.write("home");
      break;
    case "/calc":
      const dataCalc = fs.readFileSync('./index.html');
      res.write(dataCalc.toString());
      break;
    case "/somma":
      const dataAdd = fs.readFileSync('./somma.html');
      res.write(dataAdd.toString());
      res.write(`${somma(param1, param2)}`);
      break;
    case "/sottrazione":
      const dataSub = fs.readFileSync('./sottrazione.html');
      res.write(dataSub.toString());
      res.write(`${sottrazione(param1, param2)}`);
      break;
    case "/moltiplicazione":
      const dataMul = fs.readFileSync('./moltiplicazione.html');
      res.write(dataMul.toString());
      res.write(`${moltiplicazione(param1, param2)}`);
      break;
    case "/divisione":
      const dataDiv = fs.readFileSync('./divisione.html');
      res.write(dataDiv.toString());
      res.write(`${divisione(param1, param2)}`);
      break;
      case "/style.css":
        const style = fs.readFileSync('./style.css');
        res.write(style.toString());
        break;
    default:
      res.write("<h1>Error</h1><p>The page doesn't exist. Go back to <a href='/home'>Home</a>.</p>");
  }

  res.end();
});

server.listen(3000);
console.log("Server listening");

// 22-11 Lesson's notes
// const os = require("os");
// // richiamare funzioni
// console.log(os.userInfo());
// console.log(os.arch());

// // creare server utilizzando modulo http
// const http = require("http");
// // req è la richiesta che ricavo dal browser
// // res è la risposta della chiamata
// const server = http.createServer((req, res) => {
//   const my_url = req.url;
//   switch(my_url) {
//     case "/home":
//       res.write("Welcome to the Homepage");
//       break;
//     case "/calc":
//       res.write("Welcome to my calculator");
//       break;
//     default:
//       res.end("<h1>Error</h1><p>The page doesn't exist. Go back to <a href='/home'>Home</a>.</p>");
//   };
//   // if(req.url === "/home") {
//   //   res.write("Welcome to the Homepage");
//   // } else if (req.url === "/calc") {
//   //   res.write("Welcome to my calculator");
//   // } else {
//   //   res.end("<h1>Error</h1><p>The page doesn't exist. Go back to <a href='/home'>Home</a>.</p>");
//   // };
//   res.end();
// });

// // in ascolto sulla porta 3000
// server.listen(3000);
// // sul browser > localhost:3000
// console.log("Server listening");