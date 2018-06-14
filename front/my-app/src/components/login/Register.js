import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

 
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
    }
  }
  render() {
    return (
      <div class="register">
        <MuiThemeProvider>
          
          
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             />
      
        
           <br/>
           <RaisedButton label="Send" primary={true}/>
          
         </MuiThemeProvider>
      </div>
    );
  }
}

 
export default Register;