const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) => {
  const n1 = Number(req.body.num1)
  const n2 = Number(req.body.num2)
  const calculate = n1 + n2
  res.send('The result is: ' + calculate)
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post('/sub', (req, res) => {
  const n1 = Number(req.body.num1)
  const n2 = Number(req.body.num2)
  const calculate = n1 - n2
  res.send('The result is: ' + calculate)
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post('/mul', (req, res) => {
  const n1 = Number(req.body.num1)
  const n2 = Number(req.body.num2)
  const calculate = n1 * n2
  res.send('The result is: ' + calculate)
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post('/div', (req, res) => {
  const n1 = Number(req.body.num1)
  const n2 = Number(req.body.num2)
  const calculate = n1 / n2
  res.send('The result is: ' + calculate)
});

app.listen(3000, (res) => {
  console.log("Server listening")
});
