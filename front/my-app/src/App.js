import React, { Component } from 'react';
import './App.css';
import FormProject from './components/formProject/formProject.js'

const styles= {
  textAlign:'center',
};


class App extends Component {
  render() {
    return (
      <div style={styles}>
        <FormProject/>
      </div>
    );
  }
}

export default App;
