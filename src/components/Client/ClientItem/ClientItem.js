import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ClientItem.css';

class ClientList extends Component {

    render() {
      return (
       <div className="projectDiv">
        <div className="image">
          
        </div>
         <img src='./garden.png' />
       </div>
      )
    }
  }

  const mapReduxToProps = (reduxState) => {
      return reduxState;
  };
  
  export default connect(mapReduxToProps)(ClientList);