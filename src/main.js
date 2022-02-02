import {results,
    filterAlien, 
    filterHuman, 
    filterHumanoid, 
    filterRobot 
} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const d = document;
console.log(data);


console.log(filterHuman(data))
console.log(filterRobot(data))


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

console.log(example, data);


// filterSpecies();


const filtersSection = d.getElementById("filters_section");
const filtersNav = d.getElementById("filters_section");
const speciesLabel = d.getElementById("species_label");
const locationLabel = d.getElementById("location_label");
const statusLabel = d.getElementById("status_label");
const alphabetLabel = d.getElementById("aplabet_label")

function filterMenuOptions(){

// FILTERS MENU /

speciesLabel.addEventListener("click", () => {
    // optionsContainer.style = "display:block";
    const optionsContainer = d.getElementById("species_options-container")
    
    optionsContainer.classList.toggle("hidden")
    // console.log(optionsContainer)
});

locationLabel.addEventListener("click", () => {
    const OptionsContainer = d.getElementById("location_options-container")
    OptionsContainer.classList.toggle("hidden")
    // OptionsContainer.style = "paddingBottom:4vh;";
});

statusLabel.addEventListener("click", () => {
    const OptionsContainer = d.getElementById("status_options-container")
    OptionsContainer.classList.toggle("hidden")
});




}filterMenuOptions()

function menuFilter(){

const speciesOptions1 = d.getElementById("species_options1") //human
const speciesOptions2 = d.getElementById("species_options2") // alien
const speciesOptions3 = d.getElementById("species_options3") // robot
const speciesOptions4 = d.getElementById("species_options4") // humanoide

speciesOptions1.addEventListener("click", () => {
    filterHuman();
    
    const h3 = document.createElement('h3');
    const textAppend = document.body.appendChild(h3);
    const characterName = textAppend.innerHTML = `${filterHuman()}`

    const results = data.results;
    const species = results
    // console.log(filterHuman())
})

speciesOptions2.addEventListener("click", () => {
    console.log(filterAlien())
})

speciesOptions3.addEventListener("click", () => {
    console.log(filterRobot())
})



}menuFilter()


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

// FUNCION QUE RECORRE LA DATA Y DEVUELVE SUS VALORES SOLO EN CONSOLE
function getDataElements(){
  
    let elementos = results.map(function(item) {
  
      // resultados planos (es decir adentro de estos no hay otro array)
      const charactersName = item.name
      const charactersSpecies = item.species
      const charactersImage = item.image
      const charactersStatus = item.status
  
      // resultados dentro de arrays (hay que llamar a la propiedad externa primero antes de acceder a ellos)
      const charactersLocation = item.location 
      const charactersLocationName = charactersLocation.name
      const charactersLocationUrl = charactersLocation.url
  
      const charactersOrigin = item.origin
      const charactersOriginName = charactersOrigin.name
      const charactersOriginUrl = charactersOrigin.url 
  
      const charactersEpisodes = item.episode
  
        // 
  
      const h3 = document.createElement('h3');
      const textAppend = document.body.appendChild(h3);
      const characterName = textAppend.innerHTML = `${charactersName}`
  
      const imgC = document.createElement("img")
      const imgAppend = document.body.appendChild(imgC)
      const characterImage = imgAppend.src = `${charactersImage}`
  
      return {  
        characterName, characterImage
      }
      
      // console.log(charactersName)
    
      // return {
      //     charactersName,
      //     charactersSpecies,
      //     charactersImage,
      //     charactersStatus
      // }
    
    })
  
  }getDataElements();