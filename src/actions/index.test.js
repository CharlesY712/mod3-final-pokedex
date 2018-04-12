import * as actions from './index.js';

describe('Actions', () => {

  it('creates a type of ADD_POKEMON', () => {
    const pokemon = [];
    const expected = {
      type: 'ADD_POKEMON',
      pokemon
    };
    expect(actions.addPokemon(pokemon)).toEqual(expected)
  });
});