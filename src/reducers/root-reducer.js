import { combineReducers } from 'redux';
import fakeReducer from './fake-reducer';
import addPokemonReducer from './addPokemonReducer';
import addIndividualPokemonReducer from './addIndividualPokemonReducer';

const rootReducer = combineReducers({
  fake: fakeReducer,
  pokemon: addPokemonReducer,
  individuals: addIndividualPokemonReducer
});

export default rootReducer;
