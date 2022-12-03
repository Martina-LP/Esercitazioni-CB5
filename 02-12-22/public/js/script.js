import { ce, qs, GET, POST, deleteActor, deleteDirector } from './utils.js';

const urlAttori = "http://localhost:3000/attori";
const urlRegisti = "http://localhost:3000/registi";
const urlNuovoAttore = "http://localhost:3000/attore";
const urlNuovoRegista = "http://localhost:3000/regista";
const cardContainerAttori = qs(".card_container_attori");
const cardContainerRegisti = qs(".card_container_registi");
const form = document.forms.nuovi_attori;
const element = form.elements;

const formRegisti = document.forms.nuovi_registi;
const elementRegisti = formRegisti.elements;

//Creazione card attori
const createCardAttore = (data) => {
  const cardEl = ce("div");
  cardEl.classList.add("card_attore");

  const imgEl = ce("img");
  imgEl.className = "actor_placeholderimg";
  imgEl.setAttribute("src", `https://picsum.photos/300/400?${data.id}`);
  imgEl.setAttribute("alt", "imgGallery");

  const nameEl = ce("h3");
  nameEl.className = "nome_attore";

  const surnameEl = ce("p");
  surnameEl.className = "cognome_attore";

  const dateEl = ce("p");
  dateEl.className = "nascita_attore";

  const btnEl = ce("button");
  btnEl.className = "btn_card";
  btnEl.textContent = "Remove";

  const textContainerEl = ce("div");
  textContainerEl.className = "text_container";
  textContainerEl.append(nameEl, surnameEl);

  const containerEl = ce("div");
  containerEl.className = "container_general"
  containerEl.append(textContainerEl, btnEl);

  nameEl.textContent = data.nome;
  surnameEl.textContent = data.cognome;
  dateEl.textContent = data.data_nascita;

  cardContainerAttori.append(cardEl);
  cardEl.append(imgEl, containerEl);

  const idEl = data.id;
  // console.log(idEl);

  btnEl.addEventListener("click", (e) => {
    e.preventDefault();
    deleteActor(idEl).then(() => location.reload());
  });
};

//Creazione card registi
const createCardRegista = (data) => {
  const cardEl = ce("div");
  cardEl.classList.add("card_regista");

  const imgEl = ce("img");
  imgEl.className = "regista_placeholderimg";
  imgEl.setAttribute("src", `https://picsum.photos/300/400?${data.id}`);
  imgEl.setAttribute("alt", "imgGallery");

  const nameEl = ce("h3");
  nameEl.className = "nome_regista";

  const surnameEl = ce("p");
  surnameEl.className = "cognome_regista";

  const dateEl = ce("p");
  dateEl.className = "nascita_regista";

  const btnEl = ce("button");
  btnEl.className = "btn_card";
  btnEl.textContent = "Remove";

  const textContainerEl = ce("div");
  textContainerEl.className = "text_container";
  textContainerEl.append(nameEl, surnameEl);

  const containerEl = ce("div");
  containerEl.className = "container_general";
  containerEl.append(textContainerEl, btnEl);

  nameEl.textContent = data.nome;
  surnameEl.textContent = data.cognome;
  dateEl.textContent = data.data_nascita;

  cardContainerRegisti.append(cardEl);
  cardEl.append(imgEl, containerEl);

  const idEl = data.id;
  console.log(idEl);

  btnEl.addEventListener("click", (e) => {
    e.preventDefault();
    deleteDirector(idEl).then(() => location.reload());
  });
};

//Post attore
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    nome: element.nome_attore.value,
    cognome: element.cognome_attore.value,
    //data_nascita: element.data.value
  };
  
  POST(urlNuovoAttore, data)
    .then((res) => res.json())
    .then((res) => {
      console.log("Ok", res);
      location.reload();
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

//Post regista
formRegisti.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    nome: elementRegisti.nome_regista.value,
    cognome: elementRegisti.cognome_regista.value,
  };

  POST(urlNuovoRegista, data)
    .then((res) => res.json())
    .then((res) => {
      console.log("Ok", res);
      location.reload();
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

window.onload = GET(urlAttori)
.then(res => res.map(actor => createCardAttore(actor)));

window.onload = GET(urlRegisti)
.then(res => res.map(regista => createCardRegista(regista)));
