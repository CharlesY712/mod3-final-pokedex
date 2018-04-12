export const fakeAction = () => ({ type: 'FAKE'});

export const addPokemon = (pokemon) => ({
  type: 'ADD_POKEMON',
  pokemon
});

export const addIndividualPokemon = (individuals) => ({
  type: 'ADD_INDIVIDUAL_POKEMON',
  individuals
});