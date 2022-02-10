import data from './data/rickandmorty/rickandmorty.js';

export const results = data.results

export function filterSpecies(results, species) {
    let filtered = results.filter((character) => (character.species == species))
    return filtered;
}
export function filterLocation(results, location) {
    let filtered = results.filter((character) => (character.location.name == location))
    return filtered;
}
export function filterStatus(results, status) {
    let filtered = results.filter((character) => (character.status == status))
    return filtered;
}
export const Sortfilter = (results, alphabet) => {
    let sortered;
    if (alphabet == "A - Z") {
        sortered = results.sort((a, b) => {
            const name1 = a.name.toLowerCase()
            const name2 = b.name.toLowerCase()
            if (name1 > name2) return -1;
            else return 1;
        });
    } else {
        sortered = results.sort((a, b) => {
            const name1 = a.name.toLowerCase()
            const name2 = b.name.toLowerCase()
            if (name1 < name2) return 1;
            else return -1;
        });
    }
    return sortered;
}
