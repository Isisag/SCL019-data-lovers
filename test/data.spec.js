import {
    filterSpecies
} from './data.js';

const filterSpecies = [{
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "location": { "name": "Earth (Replacement Dimension)", },
    },
    {
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "location": { "name": "Earth (Replacement Dimension)", },
    },
    {
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "location": { "name": "Earth (Replacement Dimension)", },
    },
]
const orderType = [
    { "name": "Summer Smith", "species": "Human", "status": "Alive", },
    { "name": "Morty Smith", "species": "Human", "status": "Alive", }
]

const orderLocation = [
    { "name": "Morty Smith", "status": "Alive", }
]

describe('orderType', () => {
    it('is a function', () => {
        expect(typeof orderType).toBe('function');
    });

    it('Debe retornar los pokemones del tipo grass', () => {
        expect(orderType(orderTypeInput, 'grass')).toEqual(orderTypespecie);
    });

    it('Debe retornar los pokemones del tipo Fire', () => {
        expect(orderType(orderTypeInput, 'fire')).toEqual(orderLocation);
    });

});
