import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientItem from '../ClientItem/ClientItem';

class ClientList extends Component {

componentDidMount() {
    this.getProjectList();
};

getProjectList = () => {
    console.log('ProjectList GET request triggered');
    this.props.dispatch({ type: 'FETCH_PROJECT_LIST'});
};

    render() {
      return (
        <div>
          {this.props.reduxState.projects.map(project => 
              <ClientItem project={project} key={project.id}/>
          )} 
        </div>
      )
    }
  }

  const mapStateToProps = reduxState => ({
      reduxState
  });

  export default connect(mapStateToProps)(ClientList)