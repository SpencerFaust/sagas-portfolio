import React, { Component } from 'react';
import ClientItem from '../ClientItem/ClientItem';

class ClientList extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div>
            <ClientItem />
        </div>
      );
    }
  }
  
  export default ClientList;