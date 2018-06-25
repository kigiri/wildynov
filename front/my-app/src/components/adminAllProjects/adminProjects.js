import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import './adminProjects.css';



const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },

 
  palette: {
      primary: {
        light: '#9cff57', // same as '#FFCC80',
        main: '#64dd17', // same as orange[600]
        dark: '#1faa00',
        contrastText: 'rgb(0,0,0)'
      }
    },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography className="move" variant="title" color="inherit">
            ADMIN 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <Button>Membres</Button>
        <Button>Projets</Button>
        <Divider />
        <Button>Mon profil</Button>
        <Button>Deconnection</Button>
      </Drawer>
      
      
    </div>
    
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ClippedDrawer);