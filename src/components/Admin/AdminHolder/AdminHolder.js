import React, { Component } from 'react';
import Form from '../Form/Form';
import ProjectList from '../ProjectList/ProjectList';

class ClientList extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div>
            <Form />
            <ProjectList />
        </div>
      );
    }
  }
  
  export default ClientList;