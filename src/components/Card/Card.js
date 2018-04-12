import React from 'react';
import PropTypes from 'prop-types';

const Card = ({key, type, pokemonArray, getPokemon }) => {

  

  return (
    <div onClick={() => console.log(getPokemon(pokemonArray))}>
      <h1>{type}</h1>
    </div>
  );
};

Card.propTypes = {
  key: PropTypes.value,
  type: PropTypes.string,
  getPokemon: PropTypes.func
};

export default Card;