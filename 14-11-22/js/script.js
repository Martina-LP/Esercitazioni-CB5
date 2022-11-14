import {qs, GET} from "./utilities.js";

const title = qs(".card_title");
const id = qs(".card_id");
const body = qs(".card_bottom");
const btnPrev = qs(".btn_prev");
const btnNext = qs(".btn_next");
// Variables
const url ="https://jsonplaceholder.typicode.com/posts";
let i = 1;
// Buttons
btnPrev.addEventListener('click', (e) => {
  let inst = e.target.textContent;
  getQuotes(inst);
});

btnNext.addEventListener('click', (e) => {
  let inst = e.target.textContent;
  getQuotes(inst);
});
// Create Card
const getQuotes = (inst) => {

  if (!inst) {
    inst = 1;
  } else {
    inst = inst.toLowerCase();
  };

  switch (inst) {
    case 'prev':
      i = i - 1;
      break;
    case 'next':
      i = i + 1;
      break;
    default:
      i = inst;
  };

  GET(`${url}/${i}`)
    .then(res => {
      title.textContent = res?.title[0].toUpperCase() + res?.title.slice(1);
      id.textContent = `#${res?.id}`;
      body.textContent = `${res?.body[0].toUpperCase() + res?.body.slice(1)}.`;

      if (i <= 1) {
        btnPrev.disabled = true;
      } else {
        btnPrev.disabled = false;
      }

      if (i >= 10) {
        btnNext.disabled = true;
      } else {
        btnNext.disabled = false;
      }
  });
};

window.onload = getQuotes();
