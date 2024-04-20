import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Brand>
          <Link to = {'/'}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/1200px-Government_of_India_logo.svg.png"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
          </Link>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className={isNavOpen ? 'show' : ''}>
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              style={{ color: hoveredItem === 'Home' ? 'red' : 'black', cursor: 'pointer' }}
              onMouseEnter={() => handleMouseEnter('Home')}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/feature"
              style={{ color: hoveredItem === 'Features' ? 'red' : 'black', cursor: 'pointer' }}
              onMouseEnter={() => handleMouseEnter('Features')}
              onMouseLeave={handleMouseLeave}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ color: hoveredItem === 'About Us' ? 'red' : 'black', cursor: 'pointer' }}
              onMouseEnter={() => handleMouseEnter('About Us')}
              onMouseLeave={handleMouseLeave}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#"
              style={{ color: hoveredItem === 'Contact Us' ? 'red' : 'black', cursor: 'pointer' }}
              onMouseEnter={() => handleMouseEnter('Contact Us')}
              onMouseLeave={handleMouseLeave}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Button variant="dark" className="me-2">
              <FaUserPlus className="me-1 text-white" />
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
