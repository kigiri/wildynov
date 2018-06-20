
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Projet.css';
import  NavBar from '../AppBar'

import ResponsiveDialog from './modalform'

class ModalSwitch extends React.Component {
    constructor(props){
        super(props);
        this.state={
        Titre:'',
        last_name:'',
        
        }
       }
       
      render() {
          


        return (
           <div>
    
          <Switch >
          <Route exact path="/projet" component={Projets} />   
          {/* <Route path="/projet/1" component={Add} />  */}
        </Switch>
     
       
      </div>
    );
  }
}
// const routes = [
  
//   { id: 1, title: <ResponsiveDialog /> },

// ];


export const Projets = () => (

  <div>
    <a href="#" linkButton={true} href="/home"class="brand-logo center">{<img src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png" />}</a>
    <NavBar/>
    <ResponsiveDialog/>
          {/* <RaisedButton label="Ajouter un projet" primary={true} style={style} linkButton={true} href="/projet/1"  /> */}
  </div>
        
)
      
  
        // export const Add= () => (
        //   <div>
        //     {routes.map(i => (
        //       <Link
        //         key={i.id}
        //         to={{
        //           pathname: `/projet/${i.id}`,
        //           // this is the trick!
        //         }}
        //       >
        //         <p>{i.title}</p>
        //       </Link>
      
        //     ))}
      
        //   </div>
        //   );
        
        //  ({ match }) => {
        //   const route = routes[parseInt(match.params.id, 10)];
        
        // return (
        
        //    <div><h1>{route.title}</h1></div>
        //        );
        // };
        
      export const Projet = () => (
          <Router>
            <Route component={ModalSwitch} />
          </Router>
        );
        
      // const style = {
      //       margin: 15,
      //      };
        export default Projet;