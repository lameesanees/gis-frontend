import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Components/Admin/logo.png";
import Swal from "sweetalert2";
import "./header.css";
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
                  to={"/contact"}
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
              <div onClick={handleLogout} className=" display-flex-end">
                <button class="Btn">
                  <div class="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>

                  <div class="text">Logout</div>
                </button>
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
