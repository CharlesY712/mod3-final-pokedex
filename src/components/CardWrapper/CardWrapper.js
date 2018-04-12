import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { fetchPokemonById } from '../../apiCalls/apiCalls';

class CardWrapper extends Component {
 

  componentDidUpdate() {
    this.createCards(this.props.pokemon);
  }
  
  getIndividualPokemon(pokemonArray) {
    return pokemonArray.map(async (pokemonId) => {
      const singlePokemon = await fetchPokemonById(pokemonId);
      console.log(singlePokemon);
      return singlePokemon;
    });
  }

  createCards(pokemonTypeArray) {
    return pokemonTypeArray.map(type => {
      this.getIndividualPokemon(type.pokemon);
      // return <Card
      //   key={type.id}
      //   type={type.name}
      //   pokemon={type.pokemon}
      // />;
    });
  }

  render() {
    return (
      <div></div>
    );
  }

}

const mapStateToProps = ({pokemon}) => ({
  pokemon
});

export default connect(mapStateToProps)(CardWrapper);