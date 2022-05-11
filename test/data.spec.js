import {Sortfilter, filterSpecies, filterLocation, filterStatus} from '../src/data.js';

const results = [
      {"name": "Rick Sanchez","status": "Alive","species": "Human","location":"Earth (Replacement Dimension)"},
      {"name": "Morty Smith", "status": "Alive","species": "Human","location":"Earth (Replacement Dimension)"},
      {"name": "Summer Smith","status": "Alive","species": "Human","location":"Earth (Replacement Dimension)"}
  ]

const status = [
  {"name": "Conroy","status": "Dead","species": "Robot","location": "Earth (C-137)"},
  {"name": "Abadango Cluster Princess","status": "Alive","species": "Alien", "location": "Abadango"},
  {"name": "Rick Sanchez","status": "Alive","species": "Human","location":"Earth (Replacement Dimension)"},
]

const location = [
  {"name": "Abadango Cluster Princess","status": "Alive","species": "Alien", "location": {"name" : "Abadango"}},
  {"name": "Alien Morty", "status": "unknown","species": "Alien", "location": {"name" : "Citadel of Ricks"}},
  {"name": "Summer Smith","status": "Alive","species": "Human","location": {"name" : "Earth (Replacement Dimension)"}}
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

describe('filtra los personajes por su estado', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('Debe retornar personajes con el estado filtrado', () => {

    expect(filterStatus(status, 'Alive')).toEqual( [
      {"name": "Conroy","status": "Dead","species": "Robot","location": "Earth (C-137)"},
      {"name": "Abadango Cluster Princess","status": "Alive","species": "Alien", "location": "Abadango"},
      {"name": "Rick Sanchez","status": "Alive","species": "Human","location":"Earth (Replacement Dimension)"},
    ]);
  });

});

describe('filtra los personajes por su especie', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('Debe retornar personajes las especies filtradas', () => {

    expect(filterSpecies(results, 'Human')).toEqual([
      {"name": "Summer Smith","status": "Alive","species": "Human","location": "Earth (Replacement Dimension)"},
      {"name": "Rick Sanchez","status": "Alive","species": "Human","location":"Earth (Replacement Dimension)"},
      {"name": "Morty Smith", "status": "Alive","species": "Human","location":"Earth (Replacement Dimension)"},
  ]);
  });

});

describe('filtra los personajes por su locacion', () => {
  it('is a function', () => {
    expect(typeof filterLocation).toBe('function');
  });

  it('Debe retornar personajes las locaciones filtradas', () => {

    expect(filterLocation(location, 'Abadango')).toEqual([
      {"name": "Abadango Cluster Princess","status": "Alive","species": "Alien", "location": {"name" : "Abadango"}},
      {"name": "Alien Morty", "status": "unknown","species": "Alien", "location": {"name" : "Citadel of Ricks"}},
      {"name": "Summer Smith","status": "Alive","species": "Human","location": {"name" : "Earth (Replacement Dimension)"}}
    ]);
  });

});


