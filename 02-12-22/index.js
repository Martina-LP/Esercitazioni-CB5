const express = require("express");
const fs = require("fs");
const app = express();
const { uuid } = require("uuidv4");

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

const middlewareTest = (req, res, next) => {
  console.log("Req");
  next();
};

//Homepage
app.get("/home", middlewareTest, function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src/html" });
});

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

//Tutti gli attori
app.get("/attori", function(req, res) {
  const attoriText = fs.readFileSync('./src/attori.json', 'utf8');
  const attori = JSON.parse(attoriText);

  const attoriArr = attori.map((att) => {
    const {id, nome, cognome} = att;
    return {id, nome, cognome};
  });

  res.json(attoriArr);
});

//Singolo attore filtrato per ID
app.get("/attore", function(req, res){
  const idAttore = parseInt(req.query.id);
  if (isNaN(idAttore)) {
    res.status(400).send("Warning: Missing parameter");
  };

  const attoriText = fs.readFileSync('.src/attori.json', 'utf8');
  const attori = JSON.parse(attoriText);

  const IdAtt = attori.find((attore) => {
    return attore.id == idAttore;
  });

  if(typeof IdAtt === 'undefined') {
    res.status(400).send("Warning: Actor not found");
  } else {
    res.json(IdAtt);
  };
});

//Aggiunta singolo attore
app.post("/attore", function(req,res) {
  // console.log(req.body.nome);
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

//Aggiornamento attore
app.put("/attore", function (req, res) {
  // console.log(8);
  if (req.body.nome == undefined) {
    res.status(400).send("Warning: name void or missing");
  };

  if (req.body.cognome == undefined) {
    res.status(400).send("Warning: surname void or missing");
  };

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  const index = attori.findIndex((attore) => {
    return attore.id === nuovo_attore.id;
  });

  if (index > 0) {
    attori.splice(index, 1, nuovo_attore);

    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).send("Actor successfully edited");
  } else {
    res.status(200).send("Warning: Actor not found");
  };
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

//Funzione creazione regista
const creazioneRegista = (body) => {
  const nuovoRegista = {
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
  return nuovoRegista;
};

//Lista dei registi
app.get("/registi", function (req, res) {
  const registiText = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registiText);

  const registiArr = registi.map((att) => {
    const { id, nome, cognome } = att;
    return { id, nome, cognome };
  });

  res.json(registiArr);
});

//Singolo regista filtrato per ID
app.get("/regista", function (req, res) {
  const idRegista = parseInt(req.query.id);
  if (isNaN(idRegista)) {
    res.status(400).send("Warning: Missing parameter");
  };

  const registiText = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registiText);

  const IdReg = registi.find((regista) => {
    return regista.id == idRegista;
  });

  if (typeof IdReg === "undefined") {
    res.status(400).send("Warning: Director not found");
  } else {
    res.json(IdReg);
  };
});

//Aggiunta singolo regista
app.post("/regista", function (req, res) {
  // console.log(req.body.nome);
  if (req.body.nome == undefined) {
    res.status(400).send("Warning: name void or missing");
  };

  if (req.body.cognome == undefined) {
    res.status(400).send("Warning: surname void or missing");
  };

  const registaCreato = creazioneRegista(req.body);

  const registiText = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registiText);

  /* const i = Number(nuovoAttore.id)-1; */
  registi[registi.length] = registaCreato;

  fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).json({ msg: "Director successfully created" });
});

//Aggiornamento regista
app.put("/regista", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Warning: name void or missing");
  };

  if (req.body.cognome == undefined) {
    res.status(400).send("Warning: surname void or missing");
  };

  const nuovo_regista = {
    id: req.body.id == undefined ? uuid() : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);

  const index = registi.findIndex((regista) => {
    return regista.id === nuovo_regista.id;
  });

  if (index > 0) {
    registi.splice(index, 1, nuovo_regista);

    fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
    res.status(200).send("Director successfully edited");
  } else {
    res.status(200).send("Warning: Director not found");
  };
});

//Delete regista
app.delete("/regista", function (req, res) {
  // console.log(req.body.id);
  if (req.body.id == undefined) {
    res.status(400).send("Warning: Missing ID");
  };

  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Warning: NaN");
  };

  const deleteId = req.body.id;

  const registiJson = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registiJson);

  const arrayDeleted = registi.filter((regista) => {
    return regista.id != deleteId;
  });

  fs.writeFileSync("./src/registi.json", JSON.stringify(arrayDeleted));
  res.status(200).send(arrayDeleted);
});

app.listen(3000, () => {
  console.log("Server listening");
});
