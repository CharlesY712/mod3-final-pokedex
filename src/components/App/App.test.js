import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

jest.mock('../../apiCalls/apiCalls.js');

describe('App', () => {
  let wrapper;
  let mockFetchPokemonType;

  beforeEach(() => {
    mockFetchPokemonType = jest.fn();
    wrapper = shallow(<App fetchPokemonType={mockFetchPokemonType}/>);
  });

  it.only('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchPokemonType on componentDidMount', () => {
    expect(mockFetchPokemonType).toHaveBeenCalled();
  });
});
