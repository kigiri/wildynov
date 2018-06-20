import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import RaisedButton from 'material-ui/RaisedButton';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked, content : null });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
//   showRegister = () => {
//     this.setState({show: 'login/1', anchorEl: null,  });
// };
// showProjets = () => {
//   this.setState({show: 'projet',anchorEl: null });
// };
// showProfil = () => {
//   this.setState({show: 'profil', anchorEl: null })
// }
  render() {
    // let content = null;

       
    // switch(this.state.show) {
    //     case 'Projet':
    //         content = (< Projet/>);
    //         break;
    //         case 'login/1':
    //         content = (<FormProject/>);
    //         break;
    //         case 'profil':
    //         content = (<Profil/>);
    //         break;
    //         default:
    //         content = '';
    // }
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);


  
    return (
      <div className={classes.root}>
   
        <AppBar position="static">
          <Toolbar>
           
            <Typography variant="title" color="inherit" className={classes.flex}>
        
       
            </Typography>
          
          
                 <Button  color="inherit" linkButton={true} href="/projet">Projet</Button>
              
                 {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                
                
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                 
                  {/* <MenuItem checked={auth} >Deconnexion</MenuItem> */}
                 
                <li className="button">
                  <RaisedButton label="Profil" linkButton={true} href="/profil" /></li>
                 <li> <RaisedButton label="Deconnexion" checked={auth}  />
                  </li>
         
                </Menu>
              </div>
          )}
            
          </Toolbar>
        </AppBar>
     
      </div>
    );
  }}
  
MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);