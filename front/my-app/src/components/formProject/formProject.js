import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class FormProject extends Component {
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

updateInputField(event){
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

        <h1> Nouveau Projet </h1>
        <br/>
    

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
    );
  
}
}


export default FormProject;
