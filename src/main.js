//prubea import data para filtro a-z
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
import { filterSpecies, SortfilterAz, SortfilterZa } from "./data.js"
// import data from './data/rickandmorty/rickandmorty.js';



// EL CODIGO DE AQUI SE MOVIO A TEST.JS PARA DEJAR MáS LIMPIO ESTE ARCHIVO !!!
console.log(example, data);

// OPCIONES DEL MENU DE FILTROS => maneja cuando se despliegan //

const allData = data;
const results = data.results; //array


// esta función ejecuta la muestra de datos de un personaje de manera estatica
// function showCharacters() {

//     const h3 = document.createElement('h3');
//     const textAppend = document.body.appendChild(h3);
//     const characterName = textAppend.innerHTML = `${rickSanchez.name}`

//     const imgC = document.createElement("img")
//     const imgAppend = document.body.appendChild(imgC)
//     const characterImage = imgAppend.src = `${rickSanchez.image}`
// }

console.log(example, data);


// filterSpecies();
SortfilterAz

const d = document;
const filtersSection = d.getElementById("filters_section");
const filtersNav = d.getElementById("filters_section");
const speciesLabel = d.getElementById("species_label");
const locationLabel = d.getElementById("location_label");
const statusLabel = d.getElementById("status_label");
const alphabetLabel = d.getElementById("aplabet_label")

function filterMenuOptions() {

    //eventro para esconde menu
    speciesLabel.addEventListener("mouseover", () => {
        // optionsContainer.style = "display:block";
        const optionsContainer = d.getElementById("species_options-container")
        optionsContainer.classList.toggle("hidden")
    });

    const d = document;
    const filtersSection = d.getElementById("filters_section");
    const filtersNav = d.getElementById("filters_section");
    const speciesLabel = d.getElementById("species_label");
    const locationLabel = d.getElementById("location_label");
    const statusLabel = d.getElementById("status_label");
    const alphabetLabel = d.getElementById("aplabet_label")

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


    // MANEJO DE TITULO DINAMICO PARA LAS SECCIONES
    // !!! AUN NO FUNCIONA DEL TODO BIEN !!!

    function changeFiltersTitle() {

        const filtersTitle = d.querySelector("#filters_title")
        const navChapters = d.getElementById("navChapters")
        const navSeasons = d.getElementById("navSeasons")
        const navCharacters = d.getElementById("navCharacters")

        navChapters.addEventListener("click", () => {
            filtersTitle.innerHTML = "Chapters"
        });
        navSeasons.addEventListener("mouseover", () => {
            filtersTitle.textContent = "Seasons"
        });
        //    navCharacters.addEventListener("mouseover", () => {
        //     filtersTitle.textContent= "Characters"
        //    });
        navCharacters.addEventListener("focus", () => {
            filtersTitle.textContent = "Characters"
        });

    }
    changeFiltersTitle()

    // carrusel automático

}
changeFiltersTitle()
