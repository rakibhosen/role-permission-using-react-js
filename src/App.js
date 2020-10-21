import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css';
import Login from './component/auth/Login';
import Header from './component/partials/header';
import User from './views/user/userContainer';
import Role from './views/role/roleContainer';
import Permission from './views/permission/permissionContainer';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import {withRouter} from "react-router-dom";


function App() {


  return (
    <div className="App">
    
      <Router>
      
 
         <Container className="pt-5">
         <Header></Header>
           
         <Switch>
           <Route path="/"
            exact={true} 
            component={Login}
           />
 
         <Route path="/user"
            exact={true} 
            component={User}
           />
          <Route path="/role"
            exact={true} 
            component={Role}
           />
           <Route path="/permission"
            exact={true} 
            component={Permission}
           />


         </Switch>
         </Container>

     </Router>
    
    </div>
  );
}

export default App;
