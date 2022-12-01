const express = require("express");
const fs = require("fs");
const app = express();
const { uuid } = require("uuidv4");

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

//Funzione creazione attore
const creazioneAttore = (body) => {
  const nuovoAttore = {
    id: body.id == undefined ? uuid() : parseInt(body.id),
    nome: body.nome,
    cognome: body.cognome,
    data_nascita: body.data_nascita == undefined ? "" : body.data_nascita,
    riconoscimenti: body.riconoscimenti == undefined ? "" : body.riconoscimenti,
    inizio_attivita:
      body.inizio_attivita == undefined ? "" : body.inizio_attivita,
    fine_attivita: body.fine_attivita == undefined ? "" : body.fine_attivita,
    in_attivita: body.in_attivita == undefined ? "" : body.in_attivita,
  };
  return nuovoAttore;
};

//Homepage attori
app.get("/home", function (req, res) {
  res.sendFile("attori.html", { root: __dirname + "/src/html" });
});

//Tutti gli attori
app.get("/attori", function(req, res) {
  const attoriText = fs.readFileSync('./src/attori.json', 'utf8');
  const attori = JSON.parse(attoriText);

  const attoriArr = attori.map((att) => {
    const {id, nome, cognome} = att;
    return {id, nome, cognome}
  });

  res.json(attoriArr);
});

//Singolo attore filtrato per ID
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
  };
});

//Aggiunta singolo attore
app.post("/attore", function(req,res) {
  // console.log(req.body);
  if (req.body.nome == undefined) {
    res.status(400).send("Warning: name void or missing");
  };

  if (req.body.cognome == undefined) {
    res.status(400).send("Warning: surname void or missing");
  };

  const attoreCreato = creazioneAttore(req.body);

  const attoriText = fs.readFileSync('./src/attori.json', 'utf8');
  const attori = JSON.parse(attoriText);

  // const i = Number(nuovoAttore.id)-1;
  attori[attori.length] = attoreCreato;

  fs.writeFileSync('./src/attori.json',JSON.stringify(attori));
  res.status(200).json({msg: "Actor successfully created"});
});

//Delete attori
app.delete("/attore", function (req, res) {
  // console.log(req.body.id);
  if (req.body.id == undefined) {
    res.status(400).send("Warning: Missing ID");
  };

  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Warning: NaN");
  };

  const deleteId = req.body.id;

  const attoriJson = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attoriJson);

  const arrayDeleted = attori.filter((attore) => {
    return attore.id != deleteId;
  });

  fs.writeFileSync("./src/attori.json", JSON.stringify(arrayDeleted));
  res.status(200).send(arrayDeleted);
});

app.listen(3000, () => {
  console.log("Server listening");
});
