import {  Navbar,Nav,NavDropdown,FormControl, Form, Button } from 'react-bootstrap';

import React from "react";
import "../App.css";
import Logo from "./LogoLight.png"


function ReactNavbar() {
  return (
    <>
     <Navbar className="navbar" variant="light" expand="lg" >
  <Navbar.Brand href="/"><img src={Logo} style={{height:"50px", padding:"0px"}} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"><span className="nav-menu-items">Home</span></Nav.Link>
      <Nav.Link href="/shop"><span className="nav-menu-items">Shop</span></Nav.Link>
      <Nav.Link href="/events"><span className="nav-menu-items">Events</span></Nav.Link>
    </Nav>
    <div className="ml-auto mr-5">
    <Nav.Link href="/shoppingcart"><svg width="1.5em" height="1.5em" viewBox="0 1 16 16" className="bi bi-cart3" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg></Nav.Link>
</div>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" style={{color:"white"}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </>
  );
}

export default ReactNavbar;