import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockFetchPokemonType;

  beforeEach(() => {
    mockFetchPokemonType = jest.fn();
    wrapper = shallow(<App />);
  });
  
  it.skip('should match the snapshot', () => {
    console.log('hello');
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call fetchPokemonType on componentDidMount', () => {
  //   expect(mockFetchPokemonType).toHaveBeenCalled();
  // });
});
