import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  return (
  <header style={{position: 'fixed', top: 0, width: '100%', zIndex: 100}}>
    <Navbar expand="lg"className={isScrolled ? 'scrolled' : 'navbar mb-3'}>
        <Container>
            <Col>

            <Navbar.Brand href="/">JSS</Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            style={{
                backgroundColor: "white"
            }}
            >
             <Offcanvas.Header closeButton>
             <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
             <Navbar.Brand href="#home">
             <img src={logo} alt="Logo" width="80" height="60" />
             </Navbar.Brand> 
             </Offcanvas.Title>
             </Offcanvas.Header>
             
             <Offcanvas.Body>
             <Navbar.Collapse className="justify-content-end flex-grow-1 pe-3">
             <Nav className="me-auto">

          <Link to="/" className="header-bar nav-link">Search jobs</Link>
          <Link to="/" className="header-bar nav-link">Browse salaries</Link>
          <Link to="/" className="header-bar nav-link">Find recuirter</Link>

          <br/>
          <hr/>
          
          
          
          </Nav>
          <Nav>
          <Link to="/" className=" header-bar nav-link">Login In</Link>
          <Link to="/" className="">
          <button type="button" class="btn btn-outline-primary" disabled>Go to Employer site</button>

          </Link>
          
         </Nav>

                </Navbar.Collapse>

             </Offcanvas.Body>


            </Navbar.Offcanvas>
        

        </Container>

    </Navbar>
  </header>




  )
}
