import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';
const d = document;
// EL CODIGO DE AQUI SE MOVIO A TEST.JS PARA DEJAR MáS LIMPIO ESTE ARCHIVO !!! 
console.log(example, data);

// OPCIONES DEL MENU DE FILTROS => maneja cuando se despliegan // 
function filterMenuOptions(){
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

locationLabel.addEventListener("click", () => {
    const OptionsContainer = d.getElementById("location_options-container")
    OptionsContainer.classList.toggle("hidden")
    OptionsContainer.style = "paddingBottom:4vh;";
})

const locationOption = d.getElementById("location_options1")

locationOption.addEventListener("click", () => {
    alert("hola")
})

}filterMenuOptions()


// MANEJO DE TITULO DINAMICO PARA LAS SECCIONES 
 // !!! AUN NO FUNCIONA DEL TODO BIEN !!! 

function changeFiltersTitle(){
    
    const filtersTitle = d.querySelector("#filters_title")
    const navChapters = d.getElementById("navChapters")
    const navSeasons = d.getElementById("navSeasons")
    const navCharacters = d.getElementById("navCharacters")

    navChapters.addEventListener("click", () => { 
        filtersTitle.innerHTML = "Chapters"  
    });
    navSeasons.addEventListener("mouseover", () => {
        filtersTitle.textContent= "Seasons"    
   });
//    navCharacters.addEventListener("mouseover", () => {
//     filtersTitle.textContent= "Characters"      
//    });
   navCharacters.addEventListener("focus", () => {
    filtersTitle.textContent= "Characters"      
   });

}changeFiltersTitle()

