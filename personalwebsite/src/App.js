import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Main from './Main';
import NavBar from './Components/NavBar'
import Profile from './Components/Profile'
import Experience from './Components/Experience'
import AltIntroduction from './Components/AltIntroduction'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Varela Round',
    // display2: {
    //   fontFamily:'Rubik'
    // }
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <NavBar />
        <br />
        <AltIntroduction />
        <br />
        <Profile />
        <br />
        <Experience />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
