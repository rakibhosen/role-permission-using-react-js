import React, { useEffect,useState } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {withRouter,Link} from "react-router-dom";

const Header = props=>{

    const [isLogged, setIsLogged] = useState(false);


    const Logout=()=>{
        localStorage.removeItem('userData');
        setIsLogged(false)
        props.history.push("/");
       
    };

    useEffect(() => {
        // other code
    
        const userData = JSON.parse(localStorage.getItem('userData')) || undefined;
        if(typeof userData != "undefined"){
        if(userData.username && userData.username.length > 0){
            setIsLogged(true);
            console.log(isLogged)
        }
        else{
            setIsLogged(false)
            console.log(isLogged)
         }
        }   
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }) 









    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Nav className="ml-auto">
                {
                  isLogged &&(
                      <>
                    <Link to="/user"> 
                    <Nav.Item className="text-white mr-2"> User</Nav.Item>
                    </Link>
                        
                        <Nav.Item className="text-white mr-2" onClick={Logout}> Logout</Nav.Item>
                </>
                    )
                }


        {
        !isLogged &&(

            <Link to="/"> 
            <Nav.Item className="text-white mr-2"> Login</Nav.Item>
            </Link>
            )
        }

            

            <Link to="/dashboard"> 
            <Nav.Item className="text-white mr-2"> Dashboard</Nav.Item>
            </Link>

            </Nav>
            </Navbar.Collapse>

            </Navbar>


        </div>
    )
}

export default withRouter(Header);