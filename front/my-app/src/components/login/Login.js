import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Login.css'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          
        <form>
     
           <TextField
            type="email"
             hintText="Email"           
             />

           <br/>

             <TextField
               type="password"
               hintText="Mot de passe"
               />

            <br/>

            
             <RaisedButton label="Connection"  style={style} />
             <RaisedButton label="Inscription" style={style} />
             
        </form>
             
         </MuiThemeProvider>
        
      </div>
    );
  }
}
const style = {
  margin: 15,
 };
export default Login;