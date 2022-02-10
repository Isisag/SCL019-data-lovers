// estas funciones son de ejemplo
import data from './data/rickandmorty/rickandmorty.js';

export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};

console.log(data)


export const results = data.results; //array

// devuelve el valor de origen y genero de los personajes
const origin = results.map(({ origin }) => origin);
const gender = results.map(({ gender }) => gender)
const location = results.map(({ location }) => location)
console.log(gender);
console.log(origin);
console.log(location);


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


export const Sortfilter = (results, alphabet) => {
  let sortered;
  if( alphabet == "A - Z"){
    sortered = results.sort((a,b)=> {
      const name1 = a.name.toLowerCase()
      const name2 = b.name.toLowerCase()
      if( name1 < name2 ) return -1;
      else return 1;
    }); 
  }
  else{
    sortered = results.sort((a,b)=> {
      const name1 = a.name.toLowerCase()
      const name2 = b.name.toLowerCase()
      if( name1 < name2 ) return 1;
      else return -1;  
    });
  }
  return sortered;
}

