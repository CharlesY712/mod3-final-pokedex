import * as apiCall from './apiCalls';
import mockPokemonTypes from '../mocks/mockPokemonTypes';
import mockIndividualPokemon from '../mocks/mockIndividualPokemon';

describe('API Calls', () => {
  
  describe('fetchPokemonType', () => {
    let response;
    let url;

    beforeEach(() => {
      response = mockPokemonTypes;
      url = 'http://localhost:3001/types';
    });

    it('should fetch with the correct params', async () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ok: true, json: () => Promise.resolve(response)})
      ));

      apiCall.fetchPokemonType();
      
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return an array of pokemon types', async () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ok: true, json: () => Promise.resolve(response)})
      ));

      const pokemonTypes = await apiCall.fetchPokemonType();

      expect(pokemonTypes).toEqual(response);
    });

    it('should catch an error', async () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          status: 500,
          message: 'Error'
        })
      ));

      const expected = {
        status: 500,
        message: 'Error'
      };

      const call = apiCall.fetchPokemonType();

      expect(call).rejects.toEqual(expected);
    });
  });

  describe('fetchPokemonByID', () => {
    let response;
    let url;
    let id;

    beforeEach(() => {
      id = 1;
      response = mockIndividualPokemon;
      url = `http://localhost:3001/pokemon/${id}`;
    });

    it('should fetch with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ok: true, json: () => Promise.resolve(response)})
      ));

      apiCall.fetchPokemonById(id);
      
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return an individual pokemon', async () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ok: true, json: () => Promise.resolve(response)})
      ));

      const pokemon = await apiCall.fetchPokemonById(id);

      expect(pokemon).toEqual(response);
    });

    it('should catch an error', () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          status: 500,
          message: 'Error'
        })
      ));

      const expected = {
        status: 500,
        message: 'Error'
      };

      const call = apiCall.fetchPokemonById(id);

      expect(call).rejects.toEqual(expected);
    });
  });
});