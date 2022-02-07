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
        let divInfo = d.createElement("div")
        let image = d.createElement("img")
        let name = d.createElement("p")
        let status = d.createElement("p")


        div.setAttribute("class", "card")
        image.setAttribute("src", charactersImage)
        image.setAttribute("class", "card_image")
        status.setAttribute("id", characterStatus)
        name.setAttribute("class", "card_name")
        status.setAttribute("class", "card_status")
        name.innerHTML = charactersName
        status.innerHTML = characterStatus

        let prueba = container.appendChild(div);
        let prueba2 = div.appendChild(image)
        let prueba3 = div.appendChild(name)
        let prueba4 = div.appendChild(status)

    })

}



function locationOptions(){

  const location = results.map(({ location }) => location.name)
  const unicos = location.filter((name, indice) => {
      return location.indexOf(name) === indice
  })
  console.log(unicos)
  
  let x;

    results.map((option) => {
        const characterLocation = option.location.name
        const selectFilter = d.getElementById("filter-location")
        let options = d.createElement("option")

        x = options.innerHTML = unicos
        let prueba = selectFilter.appendChild(options);
    })
    x;
    
}locationOptions()



// const speciesFilter = d.getElementById("filter-species").options.namedItem("species_options1")
const speciesFilter = d.getElementById("filter-species")
const locationFilter = d.getElementById("filter-location")

// function selectFilter(){
//     let species = speciesFilter.value
//     let x = filterSpecies(results,species)
//     showCharacters(x)
// }

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






    /* // function menuFilter(){

    // const speciesOptions1 = d.getElementById("species_options1") //human
    // const speciesOptions2 = d.getElementById("species_options2") // alien
    // const speciesOptions3 = d.getElementById("species_options3") // robot
    // const speciesOptions4 = d.getElementById("species_options4") // humanoide

    // speciesOptions1.addEventListener("click", () => {
    //     filterHuman();

    //     const h3 = document.createElement('h3');
    //     const textAppend = document.body.appendChild(h3);
    //     const characterName = textAppend.innerHTML = `${filterHuman()}`

    //     const results = data.results;
    //     const species = results
    //     // console.log(filterHuman())
    // })

    // speciesOptions2.addEventListener("click", () => {
    //     console.log(filterAlien())
    // })

    // speciesOptions3.addEventListener("click", () => {
    //     console.log(filterRobot())
    // })



    // }menuFilter()



    // FUNCION QUE RECORRE LA DATA Y DEVUELVE SUS VALORES SOLO EN CONSOLE
    // function getDataElements(){

    //     let elementos = results.map(function(item) {

    //       // resultados planos (es decir adentro de estos no hay otro array)
    //       const charactersName = item.name
    //       const charactersSpecies = item.species
    //       const charactersImage = item.image
    //       const charactersStatus = item.status

    //       // resultados dentro de arrays (hay que llamar a la propiedad externa primero antes de acceder a ellos)
    //       const charactersLocation = item.location
    //       const charactersLocationName = charactersLocation.name
    //       const charactersLocationUrl = charactersLocation.url

    //       const charactersOrigin = item.origin
    //       const charactersOriginName = charactersOrigin.name
    //       const charactersOriginUrl = charactersOrigin.url

    //       const charactersEpisodes = item.episode

    //         //

    //       const h3 = document.createElement('h3');
    //       const textAppend = document.body.appendChild(h3);
    //       const characterName = textAppend.innerHTML = `${charactersName}`

    //       const imgC = document.createElement("img")
    //       const imgAppend = document.body.appendChild(imgC)
    //       const characterImage = imgAppend.src = `${charactersImage}`

    //       return {
    //         characterName, characterImage
    //       }

    //       // console.log(charactersName)

    //       // return {
    //       //     charactersName,
    //       //     charactersSpecies,
    //       //     charactersImage,
    //       //     charactersStatus
    //       // }

    //     })

    //   }getDataElements();
    // speciesOptions1.addEventListener("click", () => {
    //     filterHuman();

    //     const h3 = document.createElement('h3');
    //     const textAppend = document.body.appendChild(h3);
    //     const characterName = textAppend.innerHTML = `${filterHuman()}`

    //     const results = data.results;
    //     const species = results
    //     // console.log(filterHuman())
    // })

    // speciesOptions2.addEventListener("click", () => {
    //     console.log(filterAlien())
    // })

    // speciesOptions3.addEventListener("click", () => {
    //     console.log(filterRobot())
    // })



    // }menuFilter()



    // FUNCION QUE RECORRE LA DATA Y DEVUELVE SUS VALORES SOLO EN CONSOLE
    // function getDataElements(){

    //     let elementos = results.map(function(item) {

    //       // resultados planos (es decir adentro de estos no hay otro array)
    //       const charactersName = item.name
    //       const charactersSpecies = item.species
    //       const charactersImage = item.image
    //       const charactersStatus = item.status

    //       // resultados dentro de arrays (hay que llamar a la propiedad externa primero antes de acceder a ellos)
    //       const charactersLocation = item.location
    //       const charactersLocationName = charactersLocation.name
    //       const charactersLocationUrl = charactersLocation.url

    //       const charactersOrigin = item.origin
    //       const charactersOriginName = charactersOrigin.name
    //       const charactersOriginUrl = charactersOrigin.url

    //       const charactersEpisodes = item.episode

    //         //

    //       const h3 = document.createElement('h3');
    //       const textAppend = document.body.appendChild(h3);
    //       const characterName = textAppend.innerHTML = `${charactersName}`

    //       const imgC = document.createElement("img")
    //       const imgAppend = document.body.appendChild(imgC)
    //       const characterImage = imgAppend.src = `${charactersImage}`

    //       return {
    //         characterName, characterImage
    //       }

    //       // console.log(charactersName)

    //       // return {
    //       //     charactersName,
    //       //     charactersSpecies,
    //       //     charactersImage,
    //       //     charactersStatus
    //       // }

    //     })

    //   }getDataElements();
     }

    */}