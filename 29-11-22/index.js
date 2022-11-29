const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

//tutti gli attori
app.get("/attori", function(req, res) {
  const attoriText = fs.readFileSync('./src/attori.json', 'utf8');
  const attori = JSON.parse(attoriText);

  const attoriArr = attori.map((att) => {
    const {id, nome, cognome} = att;
    return {id, nome, cognome}
  });

  res.json(attoriArr);
});

//singolo attore filtrato per id
app.get("/attore", function(req, res){
  const idAttore = parseInt(req.query.id);
  if (isNaN(idAttore)) {
    res.status(400).send("Warning: missing parameter");
  };

  const attoriText = fs.readFileSync('.src/attori.json', 'utf8');
  const attori = JSON.parse(attoriText);

  const IdAtt = attori.find((attore) => {
    return attore.id == idAttore;
  });

  if(typeof IdAtt === 'undefined') {
    res.status(400).send("Warning: actor not found");
  } else {
    res.json(IdAtt);
  }
});

//singolo attore
app.post("/attore", function(req,res) {
  console.log(req.body);
  if (req.body.nome == undefined) {
    res.status(400).send("Warning: name void or missing");
  };
  if (req.body.cognome == undefined) {
    res.status(400).send("Warning: surname void or missing");
  };

  const nuovoAttore = {
    "id": req.body.id == undefined ? '' : parseInt(req.body.id),
    "nome": req.body.nome,
    "cognome": req.body.cognome,
    "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
    "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
    "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
    "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
    "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
  };

  const attoriText = fs.readFileSync('./src/attori.json', 'utf8');
  const attori = JSON.parse(attoriText);

  const i = Number(nuovoAttore.id)-1;
  attori[i] = nuovoAttore;

  fs.writeFileSync('./src/attori.json',JSON.stringify(attori));
  res.status(200).json({msg: "Actor successfully created"});
});

//pagina generica attori
app.get("/pagina_attori", function(req, res) {
  res.sendFile("attori.html", {root: __dirname+"/src/html"});
});

//pagina per creare nuovo attore
app.get("/nuovo_attore", function(req, res) {
  res.sendFile("nuovoattore.html", {root: __dirname+"/src/html"});
});

app.listen(3000, ()=>{
  console.log("Server listening");
});
