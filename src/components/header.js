import React, { useState, useEffect } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { Navbar, Nav, Container,Image } from "react-bootstrap";
import logo from '../images/logo.png'
const Header = (props) => {
 
  return (
    <header>
      <Navbar
        bg="light"
        expand="lg"
        collapseOnSelect
        style={{ padding: "20px" }}
      >
        <Container className='cont'>
          {/* <Link to="/dashboard"> */}
          <Navbar.Brand>
            <Image
              src={logo}
              fluid
              style={{ width: "150px", height: "30px" }}
            />
          </Navbar.Brand>
          {/* </Link> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/" className="headerLink">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/" className="headerLink">
                  FLIGHTS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/" className="headerLink">
                  HOTELS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/" className="headerLink">
                  PACKAGES
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/" className="headerLink">
                  SIGNIN
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
