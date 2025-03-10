import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
// import {LinkContainer} from 'react-router-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Correct import of FaShoppingCart and FaUser icons

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          {/* <LinkContainer to="/"> */}
          <Navbar.Brand href='/'>ProShop</Navbar.Brand> 
          {/* </LinkContainer> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <LinkContainer to='/cart'> */}
              <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
              {/* </LinkContainer> */}
              {/* <LinkContainer to='/login'> */}
                <Nav.Link href='/login'><FaUser /> Sign In</Nav.Link>
                 {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header; 
