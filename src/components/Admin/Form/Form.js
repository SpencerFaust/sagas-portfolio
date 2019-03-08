import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div>
            Form
        </div>
      );
    }
  }

  const mapReduxToProps = (reduxState) => {
      return reduxState;
  };
  
  export default connect(mapReduxToProps)(Form);