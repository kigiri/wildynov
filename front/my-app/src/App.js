import React, { Component } from 'react';

import './App.css';
import FormProject from './components/formProject/formProject.js'

import Login from './components/login/Login';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './components/Logo'
import Register from './components/login/Register';
import Profil from './components/profil/Profil';
import Projet from './components/projet/Projet';
import LoginAdmin from './components/loginAdmin/LoginAdmin.js'

class App extends Component {
  render() {
    return (

    

      <div>


          <MuiThemeProvider>
          <Logo/> 
        <LoginAdmin/>


         </MuiThemeProvider> 

      </div>
    );
  }
}

export default App;
