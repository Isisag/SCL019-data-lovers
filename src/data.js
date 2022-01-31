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

const results = data.results; //array

// ESTRUCTURAS SUGERIDAS DE FILTER -- AUN NO SE COMUNICAN CON EL DOM NI HACEN NADA MAS

let aliensFilter = results.filter((elements)=>{
  // console.log(ele)
    if( elements.species == "Alien" ){
      return elements.species 
    }
});
console.log(aliensFilter);

let humanFilter = results.filter((elements)=>{
  if( elements.species == "Human" ){
    return elements.species 
  }
});
console.log(humanFilter)

let aliveFilter = results.filter((elements)=>{
  if( elements.status == "unknown" ){
    return elements.status
  }
});
console.log(aliveFilter)


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
  
    // return {
    //     charactersName,
    //     charactersSpecies,
    //     charactersImage,
    //     charactersStatus
    // }
  
  })

}getDataElements();

