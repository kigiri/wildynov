import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  NavBar from '../AppBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class ModalSwitch extends React.Component {
  
  constructor() {
    super();
    this.state = {
      
      title:"",
      description:"",
      deadline_project:"",
      application:"",
      tag:""
    
    };
  }

  updateInputField= (event) => {
    this.setState({
      
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state,1,1);
  }
    
  render() {

    return (
      <div>
      <Switch >
      <Route  exact path="/addprojet" component={Add} /> 
        </Switch>
        </div>
    );
  }
}



export const Add = () => (

  
   
      
      <div>
        <a href="#" linkButton={true} href="/home"class="brand-logo center">{<img src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png" />}</a>
    <NavBar/>
        <h1> Nouveau Projet </h1>
        <br/>
    
<div>
        <form onSubmit={this.handleSubmit.bind(this)}>

        <TextField
        id="date"
        name="deadline_application"
        label="candidature"
        type="date"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
        onChange={this.updateInputField.bind(this)}
      />

        <TextField
        id="date"
        name="deadline_project"
        label="fin du projet "
        type="date"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
        onChange={this.updateInputField.bind(this)}
      />

        <div>
        <TextField
          required
          id="required"
          multiline
          rowsMax="3"
          value={this.state.title}
          label="titre du projet"
          defaultValue=""
          name="title"
          margin="normal"
          onChange={this.updateInputField.bind(this)}
        />
        </div>
            
        <div>
        <TextField
          required
          id="required"
          multiline
          rowsMax="20"
          value={this.state.description} 
          label="description du projet"
          defaultValue=""
          name="description"
          margin="normal"
          onChange={this.updateInputField.bind(this)}
        />
        </div>
        
    

        <div>
        <TextField
          required
          id="required"
          value={this.state.tag}
          label="mots clés"
          defaultValue="mots clés"
          name="tag"
          margin="normal"
          onChange={this.updateInputField.bind(this)}
        />
        </div>
        <br/>

        
        
       
      <div>
      <Button variant="contained" type="submit" color="primary">
      Valider </Button> 
      </div>
      </form>
      </div>
      </div>

    );
  


export const FormProject = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);
export default FormProject;
