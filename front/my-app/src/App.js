import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import FormProject from './components/formProject/formProject.js'

const styles= {
  textAlign:'center',
};

=======
import Login from './components/login/Login';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './components/Logo'
import Register from './components/login/Register';
import Profil from './components/profil/Profil';
import Projet from './components/projet/Projet'
>>>>>>> 68c5972b2db3ef469db794be851bd257ec90d859

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div style={styles}>
        <FormProject/>
=======
      <div>
{/*         
          <h1>Projet Ynov</h1> */}

          <MuiThemeProvider>

          <Logo />
          <Profil/>
         {/* < Login />     */}
         </MuiThemeProvider> 
>>>>>>> 68c5972b2db3ef469db794be851bd257ec90d859
      </div>
    );
  }
}

export default App;
