import React, { Component } from 'react';
import { connect } from 'react-redux';
  
  class ClientItem extends Component {
  
      render() {
        return (
          <tr>
              <td>{this.props.project.name}</td>
          </tr>
        )
      }
    }
  
    const mapReduxToProps = (reduxState) => {
        return reduxState;
    };
    
    export default connect(mapReduxToProps)(ClientItem);