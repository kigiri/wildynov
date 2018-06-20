import React, { Component } from 'react';
import './Login.css'
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../logo/Logo'



class LoginAdmin extends Component {
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

        <Logo/>
     <h1>ADMIN</h1>
          
        <nav>
     
           <TextField 
             hintText="Enter your Username"
             floatingLabelText="Username" 
             variant="raised" color="primary"            
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               />
            <br/>
            <Button variant="raised" color="primary" style={style}>Connexion</Button>
            <Button variant="raised" color="primary" style={style}>Premiere connexion</Button>
             
             </nav>
             
        
      </div>
    );
  }
}
const style = {
  margin: 15,
 };
export default LoginAdmin;