import { results, filterAlien, filterSpecies, filterLocation } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";
const d = document;

// import data from './data/rickandmorty/rickandmorty.js';

// funcion para mostrar en pantalla contenedor con img y name desde la data
// variable "results" contiene toda la data
window.addEventListener("load", showCharacters(results));

//funcion para crear card con propiedades de la data
function showCharacters(results) {
  let container = d.getElementById("container");
  container.innerHTML = "";
  results.map(function (character) {
    const charactersName = character.name;
    const charactersSpecies = character.species;
    const charactersImage = character.image;
    const characterStatus = character.status;
    const characterLocation = character.location.name;

    let div = d.createElement("div");
    let image = d.createElement("img");
    let name = d.createElement("p");
    let status = d.createElement("p");
    let specie = d.createElement("p");
    let location = d.createElement("p");

    div.setAttribute("class", "card");
    image.setAttribute("src", charactersImage);
    image.setAttribute("class", "card_image");
    name.setAttribute("class", "card_name");
    status.setAttribute("class", "card_status");
    specie.setAttribute("class", "card_specie");
    location.setAttribute("class", "card_location");

    name.innerHTML = charactersName;
    status.innerHTML = characterStatus;
    specie.innerHTML = charactersSpecies;
    location.innerHTML = characterLocation;

    container.appendChild(div);
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(status);
    div.appendChild(specie);
    div.appendChild(location);
  });
}

function locationOptions() {
  const location = results.map(({ location }) => location.name);
  const unicos = new Set(location);
  console.log(unicos)

  unicos.forEach((option) => {
    const selectFilter = d.getElementById("filter-location");
    let options = d.createElement("option");

    options.innerHTML = option;
    selectFilter.appendChild(options);
  });
}
locationOptions();

const locationOption = d.getElementById("location_options1");

const speciesFilter = d.getElementById("filter-species");
speciesFilter.addEventListener("change", function () {
  let filterSpecies = filterAlien(results);
  showCharacters(filterSpecies);
});

//filtro por genero

const locationFilter = d.getElementById("#filter-location"); // obtener el selector por genero

// locationFilter.addEventListener('change', (event) => { //escucho evento donde cambia la opcion escogida

//     const dataOrdenada = genderFilter(infoAthletes, event.target.value) // Utilizaste el metodo que exportaste y le entregaste como parametro la data de los atletas y el valor del selector
//     dataAthletes(dataOrdenada);
//     infoAthletes = dataOrdenada
// });

function menuFilter() {
  const locationFilter = d.getElementById("filter-location");
  const statusFilter = d.getElementById("filter-status");
  const alphabetFilter = d.getElementById("filter-alphabet");
}
