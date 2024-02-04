import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 
import './header.css';

function Header() {
  const isAuthenticated = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
    
  };

  return (
    <Navbar className="bg-body-tertiary">
      <div className="header-booking">Foglalj időpontot most...</div>
      <Container className='p-0' style={{height:'150px'}}>
        <Navbar.Brand href="/">Nail Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav mt-2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Főoldal</Nav.Link>
            <Nav.Link href="/about">Rólunk</Nav.Link>
            <Nav.Link href="/pricelist">Árlista</Nav.Link>
            <Nav.Link href="/contact">Kapcsolat</Nav.Link>
            {isAuthenticated ? (
              <>
                <NavDropdown
                  title={
                    <span>
                      <FontAwesomeIcon icon={faUser} /> Profil
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/signin">Bejelentkezés</Nav.Link>
            )}
            <NavDropdown title="Szolgáltatásaink" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nails">Műköröm</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Saját köröm megerősítése</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gellac</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
