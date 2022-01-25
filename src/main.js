import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';


    // const allData = data;  
    // const results = data.results;  //array

    // // variables de prueba
    // console.log(results)
    // const rickSanchez = results[0]
    // const mortySmith = results[1]

    // for ( const [key,value] of Object.entries(rickSanchez)){
    //     console.log(value) //valor 
    //     console.log(key)  //llave
    // }

    // for( const [key,value] of Object.entries(mortySmith)){
    //     console.log(value)
    //     console.log(key)
    // }

    // function addStyle(element){
    //     element.style.backgroundColor = "black"
    //     element.style.borderRadius = "20px"
    // }

    // // esta función ejecuta la muestra de datos de un personaje de manera estatica
    // function showCharacters(){

    //     const h3 = document.createElement('h3');
    //     const textAppend = document.body.appendChild(h3);
        
    //     const characterName = textAppend.innerHTML = `${rickSanchez.name}`

    //     const imgC = document.createElement("img")
    //     const imgAppend = document.body.appendChild(imgC)
    //     const characterImage = imgAppend.src=`${rickSanchez.image}`
        

    // }

    // // RECORRIENDO LA DATA CON MAP
    // let elementos = results.map( function( item ){
    //     // return results.id
    //     const charactersNameMap = item.name
    //     const charactersSpeciesMap = item.species
    //     const charactersImageMap = item.image
    //     const charactersStatusMap = item.status

    //     return {
    //         charactersNameMap, charactersSpeciesMap, charactersImageMap, charactersStatusMap
    //     }

    // }); console.log(elementos)
const allData = data;
const results = data.results; //array

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
function showCharacters() {

    const h3 = document.createElement('h3');
    const textAppend = document.body.appendChild(h3);
    const characterName = textAppend.innerHTML = `${rickSanchez.name}`

    const imgC = document.createElement("img")
    const imgAppend = document.body.appendChild(imgC)
    const characterImage = imgAppend.src = `${rickSanchez.image}`


}


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