import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CardWrapper extends Component {
 
  
  componentDidUpdate() {
    console.log(this.props);
    this.createCards(this.props.pokemon);
  }
  
  createCards(pokemonArray) {
    return pokemonArray.map(type => {
      return <Card
        

    })
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