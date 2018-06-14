
import React, { Component } from 'react';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../projet/Projet.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Demo from '../Demo';
import red from '@material-ui/core/colors/red';



class Projet extends Component {
    constructor(props){
        super(props);
        this.state={
        first_name:'',
        last_name:'',
        
        }
       }
       
      render() {
        return (
           <div>
              
              <Demo />
             <MuiThemeProvider>
          
          <nav>
            <TextField
             hintText="Nom"
             floatingLabelText="Nom"
             
             />
           <br/>
           <TextField
             hintText="Prénom"
             floatingLabelText="Prénom"
             
             />
         
           <br/>
             <RaisedButton label="Modifier" primary={true} style={style} />
             <RaisedButton label="Enregistrer" primary={true} style={style} />
             </nav>
             
         </MuiThemeProvider>
        
      
        </div>
         
               
        )
    }
}
const style = {
    margin: 15,
   };
    export default Projet;