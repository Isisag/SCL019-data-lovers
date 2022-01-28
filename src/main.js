import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';


const allData = data;
const results = data.results; //array

//-- Función para organizar la data en orden alfabetico de la A-Z --//

export const Sortfilter = (name, species) => {
    if (name == "a-z") {
        return name.sort(function(a, b) {
            if (a.name >= b.name) {
                return 1;
            } else {
                return -1;
            }
        });
    } else {
        return species.sort(function(a, b) {
            if (a.name >= b.name) {
                return -1;
            } else {
                return 1;
            }
        });
    }
};

// vasiables de prueba
console.log(results)
const rickSanchez = results[0]
const mortySmith = results[1]

for (const [key, value] of Object.entries(rickSanchez)) {
    console.log(value) //valor
    console.log(key) //llave
}

for (const [key, value] of Object.entries(mortySmith)) {
    console.log(value)
    console.log(key)
}

// esta función ejecuta la muestra de datos de un personaje de manera estatica
// function showCharacters() {

//     const h3 = document.createElement('h3');
//     const textAppend = document.body.appendChild(h3);
//     const characterName = textAppend.innerHTML = `${rickSanchez.name}`

//     const imgC = document.createElement("img")
//     const imgAppend = document.body.appendChild(imgC)
//     const characterImage = imgAppend.src = `${rickSanchez.image}`
// }


// RECORRIENDO LA DATA CON MAP
let elementos = results.map(function(item) {
    // return results.id
    const charactersNameMap = item.name
    const charactersSpeciesMap = item.species
    const charactersImageMap = item.image
    const charactersStatusMap = item.status

    return {
        charactersNameMap,
        charactersSpeciesMap,
        charactersImageMap,
        charactersStatusMap
    }

});
console.log(elementos)



console.log(example, data);

var first = 10;
console.log(first);






// FILTERS MENU //

const d = document;
const filtersSection = d.getElementById("filters_section");
const filtersNav = d.getElementById("filters_section");
const speciesLabel = d.getElementById("species_label");
const locationLabel = d.getElementById("location_label");
const statusLabel = d.getElementById("status_label");
const alphabetLabel = d.getElementById("alphabet_label")

//eventro para esconde menu
speciesLabel.addEventListener("mouseover", () => {
    // optionsContainer.style = "display:block";
    const optionsContainer = d.getElementById("species_options-container")
    optionsContainer.classList.toggle("hidden")
});

locationLabel.addEventListener("mouseover", () => {
    const OptionsContainer = d.getElementById("location_options-container")
    OptionsContainer.classList.toggle("hidden")
    OptionsContainer.style = "paddingBottom:4vh;";
});

statusLabel.addEventListener("mouseover", () => {
    const OptionsContainer = d.getElementById("status_options-container")
    OptionsContainer.classList.toggle("hidden")
});

alphabetLabel.addEventListener("mouseover", () => {
    const OptionsContainer = d.getElementById("filter_options-container")
    OptionsContainer.classList.toggle("hidden")
});

const locationOption = d.getElementById("location_options1")

locationOption.addEventListener("click", () => {
    alert("hola")
})
console.log(example, data);
