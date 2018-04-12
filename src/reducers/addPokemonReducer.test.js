import addPokemonReducer from './addPokemonReducer';
import mockPokemonArray from '../mocks/mockPokemonArray';
import * as actions from '../actions/index';

describe('addPokemonReducer', () => {

  it('should return by default return the state', () => {
    const expected = [];
    const action = {};

    expect(addPokemonReducer(undefined, action)).toEqual(expected);
  });

  it('should return an array of pokemon if action is ADD_POKEMON', () => {
    const pokemon = mockPokemonArray;
    const expected = {
      type: 'ADD_POKEMON',
      pokemon
    };
    
    expect(actions.addPokemon(pokemon)).toEqual(expected);
  });
});