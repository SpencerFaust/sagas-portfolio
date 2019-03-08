import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import { connect } from 'react-redux';

class ProjectList extends Component {

// componentDidMount() {
//     this.getProjectList();
// };

getProjectList = () => {
    this.props.dispatch({ type: 'FETCH_PROJECT_LIST'});
};

    render() {
      return (
        <div>
            <ProjectItem />
        </div>
      );
    }
  }

  export default connect()(ProjectList)