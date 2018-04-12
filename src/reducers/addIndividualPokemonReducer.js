const addIndividualPokemonReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_INDIVIDUAL_POKEMON':
    return [...action.individuals];
  default:
    return state;
  }
};

export default addIndividualPokemonReducer;
