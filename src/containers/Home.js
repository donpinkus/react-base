import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        Hello world, I'm not isomorphic.
      </div>);
  }
}

export default connect(state => ({ 

}), 
{

})(Home)
