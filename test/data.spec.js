import {Sortfilter} from '../src/data.js';

const results = [
      {
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "location":"Earth (Replacement Dimension)"
      },
      {
          "name": "Morty Smith",
          "status": "Alive",
          "species": "Human",
          "location":"Earth (Replacement Dimension)"
      },
      {
          "name": "Summer Smith",
          "status": "Alive",
          "species": "Human",
          "location": "Earth (Replacement Dimension)",
      }
  ]
  

describe('ordena alfabeticamente', () => {
  it('is a function', () => {
    expect(typeof Sortfilter).toBe('function');
  });

  it('Debe retornar personajes de A - Z', () => {
    expect(Sortfilter(results,'A - Z')).toEqual(Sortfilter(results));
  });

  it('Debe retornar personajes de Z - A', () => {
    expect(Sortfilter(results,'Z - A')).toEqual(Sortfilter(results));
  });

});


