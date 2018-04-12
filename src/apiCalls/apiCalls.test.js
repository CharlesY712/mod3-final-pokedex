import * as apiCall from './apiCalls';
import mockPokemonArray from '../mocks/mockPokemonArray';

describe('API Calls', () => {
  
  describe('fetchPokemonType', () => {

    let response;
    let url;

    beforeEach(() => {
      response = mockPokemonArray;
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

    it('should fetch with the correct params', () => {

    });

    it('should return an array of individual pokemon', () => {

    });

    it('should catch an error', () => {

    });
  });
});