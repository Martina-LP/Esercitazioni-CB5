const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const title = document.createElement("h1");
const list = document.querySelector("#card");
const image = document.createElement("img");
const number = document.createElement("div");
const type = document.createElement("h4");
const poke_number = 10;
const poke_limit = 1;

let page = 1;

btnNext.addEventListener ("click", () => {
  if (page === poke_number) 
  return;
  page++;
  // console.log(page);
  GET(page);
});

btnPrev.addEventListener ("click", () => {
  if (page === poke_limit) 
  return;
  page--;
  // console.log(page);
  GET(page);
});

const GET = (i) => {
  list.style = "display: none";
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  .then((data) => data.json()
  .then((res) => {
    list.style = "display: flex";
    createPokemonCard(res);
  }));
};

const createPokemonCard = (item) => {
  const typeFunction = (poke) => {
    const pokeType = poke.types.map(type => type.type.name);
    return `${pokeType.join(" ")}`;
  };

  const getId = (n) => {
    if (!n) return null;

    let id = n;

    if (id < poke_number) {
      id = "00" + id;
    } else if (id < 100) {
      id = "0" + id;
    }
    return id;
  };

  number.textContent = `#${getId(item.id)}`;
  title.textContent = item.name[0].toUpperCase() + item.name.slice(1);
  type.textContent = "Type: " + typeFunction(item);

  list.classList = `bg-${item.types[0].type.name}`;

  image.classList = "img";
  number.classList = "poke-number";
  type.classList = "poke-type";

  image.setAttribute (
    "src",
    item.sprites.front_default
  );

  list.append(image, number, title, type);
};

GET(page);
