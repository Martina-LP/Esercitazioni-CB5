import { c, q, GET, POST, PATCH, DELETE, uuidv4 } from './utils.js'

const url = "http://localhost:3000/pokemon"

// Form POST
const form = document.forms.pokemon;
const element = form.elements;
// Form PATCH
const formPatch = document.forms.pokemonEdit;
const elementsFP = formPatch.elements;

const container = q(".container");

// const ul = q(".pokemonList");
const p = q(".pokemonList");

const createCards = (url, id, data) => {
  const card = c("div");
  card.classList.add("pokemonCard");
  card.classList.add(`bg-${data.type}`);

  const imgPlaceholder = c("div");
  imgPlaceholder.className = "pokemonImg";

  const name = c("h3");
  name.className = "pokemonName";

  const type = c("h4");
  type.className = "pokemonType";

  const idEl = c("p");
  idEl.className = "pokemonId";

  const btnEdit = c("button");
  btnEdit.className = "btnEdit";

  const btnDelete = c("button");
  btnDelete.className = "btnDelete";

  name.textContent = `Name: ${data.name}`;
  type.textContent = `Type: ${data.type}`;
  idEl.textContent = `ID: ${data.id}`;
  btnEdit.textContent = "Modifica";
  btnDelete.textContent = "Elimina";
  // Button to edit
  btnEdit.addEventListener("click", () => {
		const formPatch = document.forms.pokemonEdit;
		const elementsFP = formPatch.elements;
    console.log(elementsFP);

		elementsFP.idPatch.value = id;
		elementsFP.namePatch.value = name.textContent;
		elementsFP.typePatch.value = type.textContent;
	});
  // Button to delete
  btnDelete.addEventListener("click", () => {
		DELETE(url, id)
			.then(() => location.reload())
	});

  container.append(card);
  card.append(imgPlaceholder, name, type, idEl, btnEdit, btnDelete);
};

formPatch.addEventListener("submit", (e) => {
	e.preventDefault();

	const id = elementsFP.idPatch.value;

	const data = {
		name: elementsFP.namePatch.value,
		type: elementsFP.typePatch.value
	};

	PATCH(url, id, data)
		.then(() => location.reload())
		.catch(e => console.log(e))
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = {
		id: uuidv4(),
		name: element.pkmName.value,
		type: element.pkmType.value
	};

	POST(url, data)
		.then((response) => response.json())
		.then((res) => {
			console.log('Success:', res);
		})
		.catch((error) => {
			console.error('Error:', error);
		})
});

window.onload = GET(url).then(res => res.map(pokemon => createCards(url, pokemon.id, pokemon)));
