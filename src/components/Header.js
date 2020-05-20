import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
class Header extends React.Component{
   render(){
       return(
        <div>
        <Navbar style={{"backgroundColor":"#0d253f"}} expand="lg">
                      <a class="logo" href="/">
                      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" width="154" height="20"/></a>                            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"><b style={{"color":"white"}}>Movies</b></Nav.Link>
                            <Nav.Link href="/"><b style={{"color":"white"}}>TV Shows</b></Nav.Link>
                            <Nav.Link href="/"><b style={{"color":"white"}}>People</b></Nav.Link>

                                <NavDropdown  title="More" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="/">Discussion</NavDropdown.Item>
                                    <NavDropdown.Item href="/" >Leader board</NavDropdown.Item>
                                    <NavDropdown.Item href="/" >Support</NavDropdown.Item>
                                    <NavDropdown.Item href="/" >API</NavDropdown.Item>
                               </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
        </Navbar>
        </div>
       )
   } 
}

export default Header;