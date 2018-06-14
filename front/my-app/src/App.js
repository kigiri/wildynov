import React, { Component } from 'react';
import Login from './components/login/Login';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './components/Logo'
import Register from './components/login/Register';
import Profil from './components/profil/Profil';
import Projet from './components/projet/Projet'

class App extends Component {
  render() {
    return (
      <div>
{/*         
          <h1>Projet Ynov</h1> */}

          <MuiThemeProvider>

          <Logo />
          <Login/>
         {/* < Login />     */}
         </MuiThemeProvider> 
      </div>
    );
  }
}

export default App;
