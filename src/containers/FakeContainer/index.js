import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
class FakeContainer extends Component {

  render() {
    return (
      <div>
        <button onClick={()=> {
          this.props.fakeAction();
          alert('FAKE');
        }}> FAKE </button>
      </div>
    );
  }
}

FakeContainer.propTypes = {
  fake: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  fakeAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ fakeAction:
  () => dispatch(fakeAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
