import React from 'react';
import CardWrapper, {mapStateToProps} from './CardWrapper';
import { shallow } from 'enzyme';
import mockPokemonTypes from '../../mocks/mockPokemonTypes';
import * as actions from '../../actions/index';
import mockStore from '../../mocks/mockStore';
import { Provider } from 'react-redux';

describe('CardWrapper', () => {
  // let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Provider store={mockStore}>
  //       <CardWrapper store={mockStore}/>);
  //     </Provider>
  //   )
  // });
  
  // it('should match the snapshot', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('should mapStateToProps', () => {
  //   const pokemon = {
  //     "id": "1",
  //     "name": "normal",
  //     "pokemon": [
  //       "16",
  //       "17",
  //       "18",
  //       "19",
  //       "20"
  //     ]
  //   };
    
  //   const mapped = mapStateToProps(pokemon);

  //   const expected = {pokemon};
  //   expect(mapped.pokemon).toEqual(expected);
  // });
});
