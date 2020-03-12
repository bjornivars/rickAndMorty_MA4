import React, { Component } from 'react';
// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import Navbar from './components/navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />


        {this.props.children}
      </div>
    );
  }
}


