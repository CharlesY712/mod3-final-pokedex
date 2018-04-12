import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import fetchPokemon from '../../apiCalls/apiCalls';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardWrapper from '../CardWrapper/CardWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  async componentDidMount() {
    const data = await fetchPokemon();
    this.props.addPokemon(data);
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
        <CardWrapper />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPokemon: (pokemon) => dispatch(actions.addPokemon(pokemon))
});

App.propTypes = {
  addPokemon: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
