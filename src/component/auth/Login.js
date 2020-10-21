import React, { Component } from 'react';
import {Card,Form,Button} from 'react-bootstrap';
import './Login.css';
import checkLogin from '../../services/auth/LoginService';
import {withRouter} from "react-router-dom";

class Login extends Component {

    state = { 
        username:'',
        password:'',
        errMsg:'',
        successMsg:'',

     };

componentDidMount()
{

    
        const userData = JSON.parse(localStorage.getItem('userData')) || undefined;
        if(typeof userData != "undefined"){
           if(userData.username && userData.username.length > 0){
               this.props.history.push("/user");
           }
        }
 }
     changeUsername=(e)=>{
       const username =e.target.value;
        this.setState({
            username
        })
     }

     changePassword=(e)=>{
        const password =e.target.value;
         this.setState({
            password
         })
      }

      submitForm=(e)=>{
       e.preventDefault();

    
       if(checkLogin(this.state)){
        this.setState({
            successMsg:'successfully logged in',
            errMsg:'',
        });

        localStorage.setItem('userData',JSON.stringify(this.state));
     this.props.history.push("/user")
       }else{
           this.setState({
               errMsg:'Invalid username and password',
               successMsg:'',
           });
       }
  
    
      }



    render() { 
        return ( 
 <div className="login-area d-flex justify-content-center mt-10">

    <Card style={{ width:"30rem" }}>
    <h2 className="text-center mt-2">Login to your account</h2>
        <Card.Body>
      {
      this.state.errMsg.length > 0 && (
          <p className="alert alert-danger text-center">{this.state.errMsg}</p>
      )
 
      }
    {
      this.state.successMsg.length > 0 && (
          <p className="alert alert-success text=center">{this.state.successMsg}</p>
      )
 
      }

        <Form >
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
     type="email"
     name="username"
      placeholder="Enter email" 
       onChange={this.changeUsername}
      />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    name="password"
    placeholder="Password"
    onChange={this.changePassword}
     />
  </Form.Group>

  <div className="text-center">
      <Button className="btn btn-info"
     onClick ={this.submitForm}
      >
          Login
      </Button>
  </div>
</Form>
    </Card.Body>
       
     </Card>


</div>
        );
    }
}
 
export default withRouter(Login)