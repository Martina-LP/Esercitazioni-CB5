// Funzioni operazioni
function somma(num1, num2) {
  return parseInt(num1) + parseInt(num2);
};

function sottrazione(num1, num2) {
  return parseInt(num1) - parseInt(num2);
};

function moltiplicazione(num1, num2){
  return parseInt(num1) * parseInt(num2);
};

function divisione(num1, num2){
  return parseInt(num1) / parseInt(num2);
};

const express = require('express');
const app = express();
app.use(express.static("public"));

app.get('/pagina_somma', (req, res) => 
res.sendFile('somma.html', {root: __dirname + '/src/html'}
));

app.get('/somma', function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("Parametro 1:" + param1, "Parametro 2:" + param2);
  let risultato = somma(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send('' + risultato);
});

app.get('/pagina_sottrazione', (req, res) => 
res.sendFile('sottrazione.html', {root: __dirname + '/src/html'}
));

app.get('/sottrazione', function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("Parametro 1:" + param1, "Parametro 2:" + param2);
  let risultato = sottrazione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send('' + risultato);
});

app.get('/pagina_moltiplicazione', (req, res) => 
res.sendFile('moltiplicazione.html', {root: __dirname + '/src/html'}
));

app.get('/moltiplicazione', function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("Parametro 1:" + param1, "Parametro 2:" + param2);
  let risultato = moltiplicazione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send('' + risultato);
});

app.get('/pagina_divisione', (req, res) => 
res.sendFile('divisione.html', {root: __dirname + '/src/html'}
));

app.get('/divisione', function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("Parametro 1:" + param1, "Parametro 2:" + param2);
  let risultato = divisione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send('' + risultato);
});

app.listen(3000, () => 
console.log("Example app listening on port 3000!")
);
