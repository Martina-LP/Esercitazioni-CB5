// Creo una card con un bottone che mostra una citazione diversa ogni volta che viene cliccato

const btn = document.querySelector("#clicker"); // bottone
const quoteID = document.querySelector(".quoteID"); // numero della citazione
const quoteText = document.querySelector(".quoteText"); // testo della citazione

function instantQuote () { // creo una funzione per le citazioni
  fetch("https://api.adviceslip.com/advice") // chiamo l'API che genera le citazioni
    .then((data) => {
      return data.json(); // il contenuto viene convertito in formato json
    })
    .then((quoteData) => {
      console.log(quoteData); // è possibile leggere in console che tipo di dati ci mette a disposizione l'API
      quoteID.innerHTML = `Quote #${quoteData.slip.id}`; // mostro il numero della citazione
      quoteText.innerHTML = `"${quoteData.slip.advice}"`; // mostro la citazione
    })
    .catch((err) => {
      console.log(err); // restituisco un errore in caso l'API non risponda
    });
};

function btnClick () { // creo una funzione che al click mostra ogni volta una citazione diversa (onclick in HTML)
  window.location.reload(); // il metodo 'location.reload' refresha
  instantQuote();
};

instantQuote();
