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
//(({ origin }) se estrae el valor del elemento en el array
const origin = results.map(({ origin }) => origin);
const gender = results.map(({ gender }) => gender)
console.log(gender);
console.log(origin);

// ESTRUCTURAS SUGERIDAS DE FILTER -- AUN NO SE COMUNICAN CON EL DOM NI HACEN NADA MAS

//function filterSpecies(data, ordenamiento)   => comprar en click la condicion
// export function filterSpecies(){

<<<<<<< HEAD
export function filterSpecies() {

    let aliensFilter = results.filter((elements) => elements.species == "Alien" && elements.species == "Human" && elements.species == "Humanoid");

    console.log(aliensFilter);


}
filterSpecies();

export const SortfilterAz = (data) => {
    const sortAz = data.sort((a, b) => {
        const name1 = a.name.toLowerCase()
        const name2 = b.name.toLowerCase()
        if (name1 > name2) return -1;
        else return 1;
        //  return a.title.localCompare(b.title);
    });
    console.log("ESTE ES AZ")
    return sortAz;
}
export const SortfilterZa = (data) => {
    const sortZa = data.sort((a, b) => {
        const name1 = a.name.toLowerCase()
        const name2 = b.name.toLowerCase()
        if (name1 < name2) return 1;
        else return -1;

        //  return b.title.localCompare(a.title);
    });

    return sortZa;
}

console.log(SortfilterAz(data.results));
console.log(SortfilterZa(data.results))
=======
//   let aliensFilter = results.filter((elements)=> elements.species == "Alien" );
//   return aliensFilter;

// }

export function filterAlien() {
    let aliensFilter = results.filter((elements) => elements.species == "Alien");
    return aliensFilter;
}

export function filterHuman() {
    let humanFilter = results.filter((elements) => elements.species == "Human");
    return humanFilter
}

export function filterHumanoid() {
    let humanoidFilter = results.filter((elements) => elements.species == "Humanoid");
    return humanoidFilter
}

export function filterRobot() {
    let robotFilter = results.filter((elements) => elements.species == "Robot");
    return robotFilter
}
>>>>>>> bb81126844c23e4b7f56528fdb90e427d2d324b1

export function filterSpecies() {
    return "hola"
}


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

<<<<<<< HEAD
// FUNCION QUE RECORRE LA DATA Y DEVUELVE SUS VALORES SOLO EN CONSOLE
function getDataElements() {
=======
//   console.log(SortfilterAz(data.results));
//   console.log(SortfilterZa(data.results))
>>>>>>> bb81126844c23e4b7f56528fdb90e427d2d324b1

    let elementos = results.map.(function(item) {

<<<<<<< HEAD
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

    })

}
getDataElements();
=======
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



// esta función ejecuta la muestra de datos de un personaje de manera estatica
function showCharacters() {

    const h3 = document.createElement('h3');
    const textAppend = document.body.appendChild(h3);
    const characterName = textAppend.innerHTML = `${rickSanchez.name}`

    const imgC = document.createElement("img")
    const imgAppend = document.body.appendChild(imgC)
    const characterImage = imgAppend.src = `${rickSanchez.image}`



}



let setear = new Set([results])
    // let setear2 = new Set.keys([results])
for (let species of setear) console.log(species);
for (let item of setear.keys()) console.log(item);
const myArr = Array.from(setear)
console.log(myArr)

function unico(arr) {
    return Array.from(new Set(arr))
}
<<<<<<< HEAD
=======

>>>>>>> bb81126844c23e4b7f56528fdb90e427d2d324b1
>>>>>>> 51f09f4d625e870a65462361f6ff2c4281102851
