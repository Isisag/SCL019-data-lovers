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


// FUNCION QUE RECORRE LA DATA Y DEVUELVE SUS VALORES SOLO EN CONSOLE
function getDataElements() {

    let elementos = results.map.(function(item) {

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
