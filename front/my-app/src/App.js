import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Home, Signin } from './components/login/Login';
import {initial} from './Home';
import { Projets, Add } from './components/projet/Projet'
import {ProfilForm} from './components/profil/Profil'
import ResponsiveDialog from './components/projet/modalform'
import Login from './components/login/Login'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }


   
    render() {
       
        return (
            <div className="App">
 <BrowserRouter>
 <div>
    <Switch >
          <Route exact path="/Login" component={Home} />
          <Route path="/Login/1" component={Signin} />
          <Route exact path="/home" component={initial} />
          <Route exact path="/projet" component={Projets} /> 
          <Route exact path="/profil" component={ProfilForm} />   
          {/* <Route path="/addprojet" component={Add} /> 
        */}
    </Switch>
</div>
</BrowserRouter>

            </div>

        );
    }
}

export default App;