import {
    results,
    filterSpecies,
    filterLocation,
    filterStatus,
    Sortfilter
} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const d = document;

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
        status.innerHTML = ` <div class="status_innerHTML">
        <b class="card_status"> Status: </b>
         ${characterStatus}</div>
         <div class="card_status_circle" >
         <div/>`
        specie.innerHTML = `<div class="specie_innerHTML">
                               <b class="card_specie"> Species: </b>
                                   ${charactersSpecies}</div>`
        location.innerHTML = `<div class="location_innerHTML">
        <b class="card_location"> Location: </b>${characterLocation}</div>`

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

    statusUniq.forEach((option) => {
        const selectFilter = d.getElementById("filter-status")
        let options = d.createElement("option")
        options.innerHTML = option
        selectFilter.appendChild(options);
    })

}
selectOptions()



const speciesFilter = d.getElementById("filter-species")
const locationFilter = d.getElementById("filter-location")
const statusFilter = d.getElementById("filter-status")
const alphabetFilter = d.getElementById("filter-alphabet")

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
    let filteredStatus = filterStatus(results, status);
    showCharacters(filteredStatus);
})
alphabetFilter.addEventListener("change", function() {
    let alphabet = alphabetFilter.value
    let filteredAlphabet = Sortfilter(results, alphabet)
    showCharacters(filteredAlphabet)
});



function menuFilter() {

    const iconBars = d.getElementById("icon-bars");
    const navContainer = d.getElementById("navContainer")

    iconBars.addEventListener("click", () => {
        navContainer.classList.toggle("active");
    })
}
menuFilter()
