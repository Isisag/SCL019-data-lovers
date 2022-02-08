// estas funciones son de ejemplo
import data from './data/rickandmorty/rickandmorty.js';

export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};

console.log(data)

// CONSTANTES CON DATA.JS

export const results = data.results; //array

// devuelve el valor de origen y genero de los personajes
//(({ origin }) se extrae el valor del elemento en el array
const origin = results.map(({ origin }) => origin);
const gender = results.map(({ gender }) => gender)
const location = results.map(({ location }) => location)
console.log(gender);
console.log(origin);
console.log(location);

// ESTRUCTURAS SUGERIDAS DE FILTER -- AUN NO SE COMUNICAN CON EL DOM NI HACEN NADA MAS

//function filterSpecies(data, ordenamiento)   => comprar en click la condicion
// export function filterSpecies(){

//   let aliensFilter = results.filter((elements)=> elements.species == "Alien" );
//   return aliensFilter;

// }

export function filterSpecies(results, species) {
    let filtered = results.filter((character) => (character.species == species))
    return filtered;
}

export function filterLocation(results, location) {
    let filtered = results.filter((character) => (character.location.name == location))
    console.log(filtered)
    return filtered;
}

export function filterStatus(results, status) {
    let filtered = results.filter((character) => (character.status == status))
    console.log(filtered)
    return filtered;
}

const numeros = [1, 2, 2, 3, 4, 4, 5, "uno", "dos", "uno"];

Array.prototype.unicos = function() {
    return this.filter((valor, indice) => {
        return this.indexOf(valor) === indice;
    });
}

console.log(numeros.unicos()); // [1, 2, 3, 4, 5]
// let aliveFilter = results.filter((elements)=> elements.status == "unknown");
// console.log(aliveFilter);



// export const SortfilterAz = (data) => {
//   const sortAz = data.sort((a,b)=> {
//     const name1 = a.name.toLowerCase()
//     const name2 = b.name.toLowerCase()
//     if( name1 > name2 ) return -1;
//     else return 1;
//   //  return a.title.localCompare(b.title);
//   });
//   console.log("ESTE ES AZ")
//   return sortAz;
//   }
//   export const SortfilterZa = (data) => {
//     const sortZa = data.sort((a,b)=> {
//       const name1 = a.name.toLowerCase()
//       const name2 = b.name.toLowerCase()
//       if( name1 < name2 ) return 1;
//       else return -1;
//     //  return b.title.localCompare(a.title);
//     });

//     return sortZa;
//   }

//   console.log(SortfilterAz(data.results));
//   console.log(SortfilterZa(data.results))

/* let elementos = results.map.(function(item) {


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

    // console.log(charactersName)

    // return {
    //     charactersName,
    //     charactersSpecies,
    //     charactersImage,
    //     charactersStatus
    // }

}) */


// getDataElements();

// FUNCION QUE RECORRE LA DATA Y DEVUELVE SUS VALORES SOLO EN CONSOLE
// function getDataElements(){

//   let elementos = results.map(function(item) {

//     // resultados planos (es decir adentro de estos no hay otro array)
//     const charactersName = item.name
//     const charactersSpecies = item.species
//     const charactersImage = item.image
//     const charactersStatus = item.status

//     // resultados dentro de arrays (hay que llamar a la propiedad externa primero antes de acceder a ellos)
//     const charactersLocation = item.location
//     const charactersLocationName = charactersLocation.name
//     const charactersLocationUrl = charactersLocation.url

//     const charactersOrigin = item.origin
//     const charactersOriginName = charactersOrigin.name
//     const charactersOriginUrl = charactersOrigin.url

//     const charactersEpisodes = item.episode

//       //

//     const ul = document.getElementById("prueba")
//     const h3 = document.createElement('h3');
//     const textAppend = document.body.appendChild(h3);
//     const characterName = textAppend.innerHTML = `${charactersName}`

//     // const ulInner = ul.innerHTML = `${charactersSpecies}`

//     const imgC = document.createElement("img")
//     const imgAppend = document.body.appendChild(imgC)
//     const characterImage = imgAppend.src = `${charactersImage}`

//     return {
//       characterName, characterImage
//     }

//     // console.log(charactersName)

//     // return {
//     //     charactersName,
//     //     charactersSpecies,
//     //     charactersImage,
//     //     charactersStatus
//     // }

//   })

// }getDataElements();
