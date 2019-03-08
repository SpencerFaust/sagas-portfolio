import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectItem extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div>
            Project Item
        </div>
      );
    }
  }

  const mapReduxToProps = (reduxState) => {
      return reduxState;
  };
  
  export default connect(mapReduxToProps)(ProjectItem);