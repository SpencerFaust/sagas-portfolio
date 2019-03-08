import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// Importing components
import Header from '../Header/Header';
import AdminHolder from '../Admin/AdminHolder/AdminHolder';
import ClientList from '../Client/ClientList/ClientList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <div>
            <Route exact path='/' component={ClientList} />
            <Route exact path='/admin' component={AdminHolder} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
