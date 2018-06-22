import React, { Component } from 'react'

// Importations de Material-ui
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
// Le component API "Typography" (traite le texte: police, taille...)
import Typography from '@material-ui/core/Typography'
// Le component "Card" et ses dérivés (forme des encadrés)
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// Le component "Button"
import Button from '@material-ui/core/Button'
// Le component "Divider" (équivalent au <hr />)
import Divider from '@material-ui/core/Divider';

// const theme = createMuiTheme({
//   palette: {
//     primary: { main: '#3f51b5' },
//   },
// })

class Block extends Component {
  constructor(props){
    super(props);

    this.state={
      titre:'',
      description:''
    }
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="display1" color="textSecondary">
            Titre
            {/* {props.title} */}
            </Typography>
            <Divider/>
            <Typography component="p">
            Description
              {/* <p>{props.description}</p> */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small" className={classes.button}>Voir +</Button>
          </CardActions>
        </Card>
        <br />
      </div>
  );
  }
}

const styles = {
  card: {
   width: 350,
   height: 200

  },
  title: {
    // marginBottom: 16,
    fontSize: 14
  },
  button: {

  }
};

export default withStyles(styles) (Block)
