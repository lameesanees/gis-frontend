import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Components/Admin/logo.png";
import Swal from "sweetalert2";

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
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear sessionStorage
        sessionStorage.clear();
        // Redirect user to login page
        window.location.href = "/login";
      }
    });
  };
  

  const [token, setToken] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  });

  return (
    <>
      {token ? (
        <Navbar bg="light" expand="lg" className="text-center">
          <Container>
            <Navbar.Brand>
              <Link to={"/"}>
                <img
                  src={logo}
                  height="60"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={toggleNav}
            >
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </Navbar.Toggle>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={isNavOpen ? "show" : ""}
            >
              <Nav className="mx-auto align-items-center">
                <Link
                  to={"/"}
                  className="nav-link"
                  style={{
                    color: hoveredItem === "Home" ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter("Home")}
                  onMouseLeave={handleMouseLeave}
                >
                  Home
                </Link>
                <Link
                  to={"/feature"}
                  className="nav-link"
                  style={{
                    color: hoveredItem === "Features" ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter("Features")}
                  onMouseLeave={handleMouseLeave}
                >
                  Services
                </Link>
                <Link
                  to={"/about"}
                  className="nav-link"
                  style={{
                    color: hoveredItem === "Contact Us" ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter("Contact Us")}
                  onMouseLeave={handleMouseLeave}
                >
                  Contact
                </Link>
                <Link
                  to={"/about"}
                  className="nav-link"
                  style={{
                    color: hoveredItem === "About Us" ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter("About Us")}
                  onMouseLeave={handleMouseLeave}
                >
                  About Us
                </Link>
              </Nav>
              <div onClick={handleLogout} className="mt-3 display-flex-end">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9653/9653907.png"
                  alt=""className="img-fluid " style={{width:"40px"}}
                />{" "}Logout
             
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="light" expand="lg" className="text-center">
          <Container>
            <Navbar.Brand>
              <Link to={"/"}>
                <img
                  src={logo}
                  height="60"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={toggleNav}
            >
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </Navbar.Toggle>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={isNavOpen ? "show" : ""}
            >
              <Nav className="mx-auto align-items-center">
                <Link
                  to={"/"}
                  className="nav-link"
                  style={{
                    color: hoveredItem === "Home" ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter("Home")}
                  onMouseLeave={handleMouseLeave}
                >
                  Home
                </Link>
                <Link
                  to={"/feature"}
                  className="nav-link"
                  style={{
                    color: hoveredItem === "Features" ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter("Features")}
                  onMouseLeave={handleMouseLeave}
                >
                  Services
                </Link>
                <Link
                  to={"/about"}
                  className="nav-link"
                  style={{
                    color: hoveredItem === "Contact Us" ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter("Contact Us")}
                  onMouseLeave={handleMouseLeave}
                >
                  Contact
                </Link>
                <Link
                  to={"/about"}
                  className="nav-link"
                  style={{
                    color: hoveredItem === "About Us" ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter("About Us")}
                  onMouseLeave={handleMouseLeave}
                >
                  About Us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default Header;
