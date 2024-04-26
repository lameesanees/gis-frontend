import React from "react";
import video1 from "../assets/video1.mp4";
import "./home.css";
import Feature from "./Feature";
import About from "../Components/About";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="video-container position-relative">
        <div className="video-overlay"></div>
        <video autoPlay muted loop className="video" style={{ width: "100%" }}>
          <source src={video1} type="video/mp4" />
        </video>
        <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center">
          <h2 className="video-caption">Streamlined Reporting</h2>
          <p className="video-description">
            Efficiently report accidents and file cases with our user-friendly
            platform.
          </p>
          <Nav className="d-flex justify-content-center">
            <Link to="/login">
              <Button className="btn" style={{ backgroundColor: "black", color: "white" }}>
                <FaUserPlus className="me-2 text-white" />
                Get Started
              </Button>
            </Link>
          </Nav>
        </div>
      </div>

      <div>
        <Feature />
      </div>
      <br />
      <div>
        <About />
      </div>
    </>
  );
}

export default Home;
