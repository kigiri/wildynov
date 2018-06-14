import React, { Component } from 'react';
import SelectsCampus from './SelectCampus';
import SelectsPromo from './SelectPromo';
import SelectSkills from './SelectSkills';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../profil/Profil.css';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import Demo from '../Demo';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#3f51b5' },
  },
})

class Profil extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      campus:'',
      promo:'',
      compétences:''
    }
  }
  
  render() {
    return (
      <div>
      <Demo />
      <MuiThemeProvider theme={theme}>
      
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
      <SelectsCampus            
      />
      <br/>
      <SelectsPromo
      />
      <br/>
      <SelectSkills
      />
      <br/>
      <Button variant="raised" color="primary" style={style}>Modifier</Button>
      <Button variant="raised" color="primary" style={style}>Enregistrer</Button>
      </nav>
      
      </MuiThemeProvider>
      
      
      </div>
      
      
    )
  }
}
const style = {
  margin: 15
};
export default Profil;