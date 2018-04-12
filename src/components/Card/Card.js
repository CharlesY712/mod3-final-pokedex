import React from 'react';
import PropTypes from 'prop-types';

const Card = ({key, type, getPokemon }) => {

  return (
    <div onClick={() => console.log(getPokemon())}>
      <h1>{type}</h1>
    </div>
  );
};

export default Card;