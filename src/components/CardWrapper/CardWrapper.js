import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { fetchPokemonById } from '../../apiCalls/apiCalls';

class CardWrapper extends Component {
  
  getIndividualPokemon(pokemonArray) {
    return pokemonArray.map(async (pokemonId) => {
      const singlePokemon = await fetchPokemonById(pokemonId);
      console.log(singlePokemon);
      return singlePokemon;
    });
  }

  getPokemonType(pokemonTypeArray) {
    return pokemonTypeArray.map(async type => {
      // return <Card
      //   key={type.id}
      //   type={type.name}
      //   getPokemon={this.getIndividualPokemon}
      // />;
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

CardWrapper.propTypes = {
  pokemon: PropTypes.array
};

export default connect(mapStateToProps)(CardWrapper);