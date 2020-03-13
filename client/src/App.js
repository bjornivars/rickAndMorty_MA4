import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import Navbar from './components/navbar';
import Login from './pages/Login';


export default class App extends Component {
  state = {
    isLoggedIn: true,
  }

  updateLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  logoutUser = () => {
    this.setState({
      isLoggedIn: false,
    })
    sessionStorage.clear();
  }

  render() {
    return (sessionStorage.getItem('user') !== null && this.state.isLoggedIn) ? 
    ( 
      <div className="App">
        <Navbar />   
        <button className="btn btn-primary fixed-top btn-logout" onClick={this.logoutUser}>Log out</button>
          {this.props.children}
      </div>
    ) : (
      <Login updateLoginStatus={this.updateLogin} />
    )
  }
}
