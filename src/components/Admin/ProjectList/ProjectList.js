import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'

class ProjectList extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div>
            <ProjectItem />
        </div>
      );
    }
  }
  
  export default ProjectList;