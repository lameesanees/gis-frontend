import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBInputGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <style>
        {`
          .nav-item {
            position: relative;
          }
          .nav-link {
            display: inline-block;
          }
          .nav-link:hover::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -3px; /* Adjust the position of the underline */
            height: 2px;
            background-color: white;
          }
        `}
      </style>
      <MDBNavbar expand="lg" bgColor="rgba(0, 0, 0, 0.5)">
        <MDBContainer fluid style={{ marginLeft: "10px" }}>
          <MDBNavbarBrand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/1200px-Government_of_India_logo.svg.png"
              style={{ width: "8rem" }}
              alt=""
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNav}>
            <MDBNavbarNav style={{ fontSize: "100%" }}>
              <MDBNavbarItem>
                <MDBNavbarLink
                  className="nav-link"
                  style={{ marginTop: "20px" }}
                  aria-current="page"
                  href="#"
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  className="nav-link"
                  href="#"
                  style={{ marginTop: "20px" }}
                >
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  className="nav-link"
                  style={{ marginTop: "20px" }}
                  href="#"
                >
                  Features
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  className="nav-link"
                  style={{ marginTop: "20px" }}
                  href="#"
                >
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBInputGroup
                  tag="form"
                  className="d-flex w-auto mb-3 mt-4"
                  style={{ marginLeft: "650px" }}
                >
                  <input
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    type="Search"
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                      paddingLeft: "10px",
                    }}
                  />
                  <MDBBtn
                    transparent
                    style={{ marginRight: "8px", backgroundColor: "gray" }}
                  >
                    <IoSearch style={{ fontSize: "15px", color: "white" }} />
                  </MDBBtn>
                </MDBInputGroup>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <img src={logo} alt="" style={{ width: "8rem" }} />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
