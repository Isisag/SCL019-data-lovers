import {
    results,
    filterSpecies
} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const d = document;
console.log(data);



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



function showCharacters(results) {
    let container = d.getElementById("container")

    results.map(function(character) {
        const charactersName = character.name
        const charactersSpecies = character.species
        const charactersImage = character.image
        const characterStatus = character.status


        let div = d.createElement("div")
        let image = d.createElement("img")
        let name = d.createElement("p")
        let status = d.createElement("p")


        div.setAttribute("class", "cell")
            // const imageCard = image.src = `${charactersImage}`
        image.setAttribute("src", charactersImage)
        status.setAttribute("id", characterStatus)

        name.innerHTML = charactersName
        status.innerHTML = characterStatus

        // const nameCard = name.innerHTML = `${charactersName}`



        let prueba = container.appendChild(div);
        let prueba2 = div.appendChild(image)
        let prueba3 = div.appendChild(name)
        let prueba4 = div.appendChild(status)

        return {

        }

    })
}
showCharacters(results)
    // filterSpecies();


const speciesFilter = d.getElementById("filter-species")
speciesFilter.addEventListener("change", speciesFilter)


const locationFilter = d.getElementById("filter-location")
const statusFilter = d.getElementById("filter-status")
const alphabetFilter = d.getElementById("filter-alphabet")






// function menuFilter(){

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
