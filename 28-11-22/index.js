const express = require("express"); //importo il modulo express
const app = express(); //assegno express alla costante app
const calc = require("./src/calc"); //importo il modulo calcolatrice

app.use(express.static("public")); //cartella public

app.listen(3000, () => {  
  console.log("Server listening");
});

app.get("/home", function(req, res) {
  res.sendFile("index.html", {root: __dirname+"/src"});
});

app.get("/calcolatrice", function(req, res) {

  console.log(req.query);

  let par1 = req.query.param1; //numero1
  let par2 = req.query.param2; //numero2
  let par3 = req.query.param3; //operazione
  let result;

  switch(par3) {
    case "somma": 
      result = calc.somma(par1, par2);
      res.status(200).json({risultato: result});
    break;
    case "sottrazione":
      result = calc.sottrazione(par1, par2);
      res.status(200).json({risultato: result});
    break;
    case "moltiplicazione":
      result = calc.moltiplicazione(par1, par2);
      res.status(200).json({risultato: result});
    break;
    case "divisione": 
      result = calc.divisione(par1, par2);
      res.status(200).json({risultato: result});
    break;
    case "modulo": 
      result = calc.modulo(par1, par2);
      res.status(200).json({risultato: result});
    break;
    default: console.log("Error");
  }
});
