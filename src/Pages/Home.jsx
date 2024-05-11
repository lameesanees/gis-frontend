import React, { useEffect, useState } from "react";
import video1 from "../assets/video1.mp4";
import "./home.css";
import Feature from "./Feature";
import About from "../Components/About";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log("isLoggedIn:", isLoggedIn);
  }, []);

  return (
    <>
      <div className="video-container position-relative">
        <div className="video-overlay"></div>
        <video autoPlay muted loop className="video" style={{ width: "100%" }}>
          <source src={video1} type="video/mp4" />
        </video>
        <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center">
          <h2 className="video-caption indian-flag-text">
            Welcome to &nbsp;
            <span>G</span>
            <span>U</span>
            <span>A</span>
            <span>R</span>
            <span>D</span>
            <span>&nbsp;</span>
            <span>I</span>
            <span>N</span>
            <span>D</span>
            <span>I</span>
            <span>A</span>
            <span>&nbsp;</span>
            <span>S</span>
            <span>E</span>
            <span>V</span>
            <span>A</span>
            <span>&nbsp;</span>!
          </h2>
          <p className="video-description">
            Efficiently report accidents and file cases with our user-friendly
            platform.
          </p>
          <Nav className="d-flex justify-content-center">
            {isLoggedIn ? (
              <Link to="/dashboard">
                <button
                  className="btn"
                  style={{ backgroundColor: "#354a33", color: "white" }}
                >
                  Track your application
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  className="btn"
                  style={{ backgroundColor: "darkGreen", color: "white" }}
                >
                  <FaUserPlus className="me-2 text-white" />
                  Get Started
                </button>
              </Link>
            )}
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
