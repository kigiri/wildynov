import React, { Component } from 'react';
import Login from './components/login/Login';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './components/Logo'

class App extends Component {
  render() {
    return (
      <div>
{/*         
          <h1>Projet Ynov</h1> */}

          <MuiThemeProvider>
          <Logo />
         < Login />    
         </MuiThemeProvider> 
      </div>
    );
  }
}

export default App;
