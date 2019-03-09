import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectItem extends Component {

    handleDelete = () => {
        this.props.dispatch({ type: 'DELETE_PROJECT_LIST', payload: this.props.project.id});
    };

    render() {
      return (
        <tr>
            <td>{this.props.project.name}</td>
            <td><button onClick={this.handleDelete}>Delete</button></td>
        </tr>
      )
    }
  }

  const mapReduxToProps = (reduxState) => {
      return reduxState;
  };
  
  export default connect(mapReduxToProps)(ProjectItem);