import {
    results,
    filterAlien,
    filterSpecies,
    filterLocation
} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const d = document;

// import data from './data/rickandmorty/rickandmorty.js';


// funcion para mostrar en pantalla contenedor con img y name desde la data
// variable "results" contiene toda la data
window.addEventListener("load", showCharacters(results));

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
        status.innerHTML = characterStatus
        specie.innerHTML = charactersSpecies
        location.innerHTML = characterLocation

        let containerAppend = container.appendChild(div);
        let imageAppend = div.appendChild(image)
        let nameAppend = div.appendChild(name)
        let statusAppend = div.appendChild(status)
        let specieAppend = div.appendChild(specie)
        let locationAppend = div.appendChild(location)

    })

}



function locationOptions(){

  const location = results.map(({ location }) => location.name)
  const unicos = location.filter((name, indice) => {
      return location.indexOf(name) === indice
  })
  console.log(unicos)
  

    results.map((option) => {
        const characterLocation = option.location.name
        const selectFilter = d.getElementById("filter-location")
        let options = d.createElement("option")

        options.innerHTML = characterLocation
        let prueba = selectFilter.appendChild(options);
    })
    
    
}locationOptions()



const speciesFilter = d.getElementById("filter-species")
const locationFilter = d.getElementById("filter-location")


speciesFilter.addEventListener("change", function(){
    let species = speciesFilter.value
    let filteredSpecies = filterSpecies(results, species);
    showCharacters(filteredSpecies);
})

locationFilter.addEventListener("change", function(){
    let location = locationFilter.value
    console.log(location)
    let filteredSpecies = filterLocation(results, location);
    showCharacters(filteredSpecies);
})


function menuFilter() {

    const locationFilter = d.getElementById("filter-location")
    const statusFilter = d.getElementById("filter-status")
    const alphabetFilter = d.getElementById("filter-alphabet")

}
