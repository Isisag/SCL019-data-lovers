import {
    results,
    filterSpecies,
    filterLocation,
    filterStatus
} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const d = document;

// import data from './data/rickandmorty/rickandmorty.js';


// funcion para mostrar en pantalla contenedor con img y name desde la data
// variable "results" contiene toda la data
window.addEventListener("load", showCharacters(results));

//funcion para crear card con propiedades de la data
function showCharacters(results) {
    let container = d.getElementById("container")
    container.innerHTML = "";
    results.map(function(character) {
        const charactersName = character.name
        const charactersSpecies = character.species
        const charactersImage = character.image
        const characterStatus = character.status
        const characterLocation = character.location.name

        let div = d.createElement("div")
        let image = d.createElement("img")
        let name = d.createElement("p")
        let statusDot = d.createElement("input")
        let status = d.createElement("p")
        let specie = d.createElement("p")
        let location = d.createElement("p")

        div.setAttribute("class", "card")
        image.setAttribute("src", charactersImage)
        image.setAttribute("class", "card_image")
        name.setAttribute("class", "card_name")
        status.setAttribute("class", "card_status")
        specie.setAttribute("class", "card_specie")
        location.setAttribute("class", "card_location")

        name.innerHTML = charactersName
        status.innerHTML = characterStatus
        specie.innerHTML = charactersSpecies
        location.innerHTML = characterLocation

        container.appendChild(div);
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(status)
        div.appendChild(specie)
        div.appendChild(location)

    })

}



function selectOptions() {

    const location = results.map(({ location }) => location.name)
    const unicos = new Set(location);

    unicos.forEach((option) => {
        const selectFilter = d.getElementById("filter-location")
        let options = d.createElement("option")

        options.innerHTML = option
        selectFilter.appendChild(options);
    })
    const species = results.map(({ species }) => species)
    const speciesUniq = new Set(species);

    speciesUniq.forEach((option) => {
        const selectFilter = d.getElementById("filter-species")
        let options = d.createElement("option")

        options.innerHTML = option
        selectFilter.appendChild(options);
    })

    const status = results.map(({ status }) => status)
    const statusUniq = new Set(status);
    console.log(statusUniq)

    statusUniq.forEach((option) => {
        const selectFilter = d.getElementById("filter-status")
        let options = d.createElement("option")

        options.innerHTML = option
        selectFilter.appendChild(options);
    })

}selectOptions()



const speciesFilter = d.getElementById("filter-species")
const locationFilter = d.getElementById("filter-location")
const statusFilter = d.getElementById("filter-status")

speciesFilter.addEventListener("change", function() {
    let species = speciesFilter.value
    let filteredSpecies = filterSpecies(results, species);
    showCharacters(filteredSpecies);
})

locationFilter.addEventListener("change", function() {
    let location = locationFilter.value
    let filteredLocation = filterLocation(results, location);
    showCharacters(filteredLocation);
})
statusFilter.addEventListener("change", function() {
    let status = statusFilter.value
    console.log(status)
    let filteredStatus = filterStatus(results, status);
    showCharacters(filteredStatus);
})

function menuFilter() {

   const iconBars = d.getElementById("icon-bars");
   const navContainer = d.getElementById("navContainer")
//    const iconBars1 = d.getElementById("icon-bars1");
//    const navContainer1 = d.getElementById("navContainer1")

   iconBars.addEventListener("click", ()=> {
            navContainer.classList.toggle("active");
            
   })
   
//    iconBars1.addEventListener("click", ()=> {
//             navContainer1.classList.toggle("active");
//    })
   
}menuFilter()
