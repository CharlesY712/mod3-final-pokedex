import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { fetchPokemonById } from '../../apiCalls/apiCalls';
import * as actions from '../../actions/index';

class CardWrapper extends Component {
  
  getIndividualPokemon(pokemonArray) {
    return pokemonArray.map(async (pokemonId) => {
      const singlePokemon = await fetchPokemonById(pokemonId);
      actions.addIndividualPokemon(singlePokemon);
    });
  }

  getPokemonType(pokemonTypeArray) {
    return pokemonTypeArray.map( type => {
      this.getIndividualPokemon(type.pokemon);
      return <Card
        key={type.id}
        type={type.name}
      />;
    });
  }

  render() {
    return (
      <div >
        {this.getPokemonType(this.props.pokemon)}
      </div>
    );
  }

}

const mapStateToProps = ({pokemon}) => ({
  pokemon
});

const mapDispatchToProps = dispatch => ({
  addIndividualPokemon: (individual) => dispatch(actions.addIndividualPokemon(individual))
});

CardWrapper.propTypes = {
  pokemon: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper);