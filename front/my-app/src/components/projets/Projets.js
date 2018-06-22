import React, { Component } from 'react'

// Importations de Material-ui
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'


// Importations fichiers
import Block from './Block'
import './Projets.css'
// import Demo from '../Demo';
// import '../profil/Profil.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6effff',
      main: '#3f50b5',
      dark: '#00b2cc',
      contrastText: '#fff',
    }
  }
})

class Projets extends Component {
  constructor(props){
    super(props);

    this.state={
      filtre:[]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }
  
  handleSubmit(event) {
    // console.log(this.state,1,1// );
    event.preventDefault()
    // Il faut afficher dans la page les éléments rentrés dans le Texfield
    // filtre.filter( (i) => { }
  }

  updateFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  render() {
    const {classes} = this.props
    // Fonction qui filtre ou map (pour juste reprendre les infos description et titre ?)
    // Ici, Projets serait un objet d'arrays contenant les infos "title", "description"...
    // Projets.map( (i) => {
    // return (
    //   < Block 
    //   title={Projets[i].title} description={Projets[i].description}
    //   />
    return (
      <div className={classes.root}>
      
        <MuiThemeProvider theme={theme}>
        {/* J'ai rajouté une fonction onChange pour récupérer la valeur entrée dans le Textfield */}
        <TextField hintText="Nom" floatingLabelText="Nom" onChange={this.updateFilter}/>
          <Button size="small" variant="raised" color="primary"className={classes.button1}>Rechercher</Button>
          <Button size="small" variant="raised" color="primary" className={classes.button2}>+ Ajouter un projet</Button>
          <br />
          <br />
          <br />
          <Grid container >
            <Grid item xs={12} md={6} lg={3}>
              < Block 
              // title={} description={}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              < Block 
              // title={} description={}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              < Block 
              // title={} description={}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              < Block 
              // title={} description={}
              />
            </Grid>

                        <Grid item xs={12} md={6} lg={3}>
              < Block 
              // title={} description={}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              < Block 
              // title={} description={}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              < Block 
              // title={} description={}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              < Block 
              // title={} description={}
              />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>     
    )
  }
}

const styles = theme => ({
  root: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.paper
  },
  button1: {
    marginLeft: 20
  },
  button2: {
    marginLeft: 20
  }
})

Projets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Projets)
