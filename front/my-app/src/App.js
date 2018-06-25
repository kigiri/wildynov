import React, { Component } from 'react';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './components/Logo';
import ClippedDrawer from './components/adminAllProjects/adminProjects'
import EnhancedTable from './EnhancedTable';


class App extends Component {
  render() {
    return (
      <div>
{/*         
          <h1>Projet Ynov</h1> */}

          <MuiThemeProvider>
          <Logo />
         < ClippedDrawer/>
         <EnhancedTable/>
         
         </MuiThemeProvider> 
      </div>
    );
  }
}

export default App;
