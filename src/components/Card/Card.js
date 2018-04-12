import React from 'react';
import PropTypes from 'prop-types';

const Card = ({key, type }) => {

  return (
    <div id={key}>
      <h1>{type}</h1>
    </div>
  );
};

export default Card;