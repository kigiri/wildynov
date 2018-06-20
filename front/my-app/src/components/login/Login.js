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
          
        <nav>
     
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"             
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               />
            <br/>
             <RaisedButton label="Connexion" primary={true} style={style} />
             <RaisedButton label="Register" primary={true} style={style} />
             </nav>
             
         </MuiThemeProvider>
        
      </div>
    );
  }
}
const style = {
  margin: 15,
 };
export default Login;