import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import NavBar from './Components/NavBar'
import Profile from './Components/Profile'
import Background from './Components/Background'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <Profile />
        <br />
        <Background />
      </div>
    );
  }
}

export default App;
