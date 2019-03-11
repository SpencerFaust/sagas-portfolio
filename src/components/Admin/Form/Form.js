import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Form extends Component {
    state = {
        name: '',
        date_completed: '',
        tag_id: '',
        github: '',
        website: '',
        description: '',
        thumbnail: '',
    };

    onChange = (property) => (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            [property]: event.target.value,
        });
    };

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_TO_PROJECT_LIST', payload: this.state})
    };

    routeToClient = () => {
        this.props.history.push('/');
    };

    render() {
      return (
        <div>
            <h2>Add a Project</h2>
            <input type="text" placeholder="Enter the name" value={this.state.name} onChange={this.onChange('name')} />

            <input type="date" value={this.state.date} onChange={this.onChange('date_completed')} />

            <select value={this.state.name} onChange={this.onChange('tag_id')}>
                <option value="" disabled>Select</option>
                <option value="1">React</option>
                <option value="2">JQuery</option>
                <option value="3">Node</option>
                <option value="4">SQL</option>
                <option value="5">Redux</option>
                <option value="6">HTML</option>
            </select>

            <input type="text" placeholder="Image tag" value={this.state.git} onChange={this.onChange('thumbnail')} />
            <input type="text" placeholder="GitHub URL" value={this.state.git} onChange={this.onChange('github')} />

            <input type="text" placeholder="Web URL (optional)" value={this.state.web} onChange={this.onChange('website')} />

            <textarea placeholder="Description" value={this.state.description} onChange={this.onChange('description')} /><br/>
            <button onClick={this.handleClick}>Submit</button>
            <button onClick={this.routeToClient}>View Client Side</button>
        </div>
      );
    }
  }

  const mapReduxToProps = (reduxState) => {
      return reduxState;
  };
  
  export default connect(mapReduxToProps)(withRouter(Form));