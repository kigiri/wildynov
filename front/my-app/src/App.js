import React, { Component } from 'react';
<<<<<<< HEAD
import Login from './components/login/Login';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './components/Logo'
import Register from './components/login/Register';
import Profil from './components/profil/Profil';
import Projet from './components/projet/Projet'
=======
import './App.css';
import FormProject from './components/formProject/formProject.js'

const styles= {
  textAlign:'center',
};

>>>>>>> 63cf0b381de04c8504c0f4e7a6f5508d21126f0b

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
{/*         
          <h1>Projet Ynov</h1> */}

          <MuiThemeProvider>

          <Logo />
          <Login/>
         {/* < Login />     */}
         </MuiThemeProvider> 
=======
      <div style={styles}>
        <FormProject/>
>>>>>>> 63cf0b381de04c8504c0f4e7a6f5508d21126f0b
      </div>
    );
  }
}

export default App;
