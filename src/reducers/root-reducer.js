import { combineReducers } from 'redux';
import fakeReducer from './fake-reducer';
import addPokemonReducer from './addPokemonReducer';

const rootReducer = combineReducers({
  fake: fakeReducer,
  pokemon: addPokemonReducer
});

export default rootReducer;
