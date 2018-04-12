import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import fetchPokemon from '../../apiCalls/apiCalls';
import * as actions from '../../actions/index';

class App extends Component {

  async componentDidMount() {
    const data = await fetchPokemon();
    console.log(data);
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon))
});

export default App;
