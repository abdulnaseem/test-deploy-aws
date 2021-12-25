import React from 'react';
import NavLogo from './logo';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './index.css';

const Navigation = () => {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand className="logo">
            <NavLogo />
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/university-projects">University Projects</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

      </div>
    </>
  );
}

export default Navigation;
