import React, { useState } from "react";
import "./featurecard.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import comm from "./comm.png"
function FeatureCard() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <div className="feature-container mt-5">
        <h4 style={{ color: "#969445" }}>
          <b>What would you like to apply?</b>{" "}
        </h4>
        <div className="card-container mt-5 ">
          {/* Card 1 */}
          <div
            className="card mb-4 card-wrapper"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              style={{ display: "block", margin: "0 auto", width: "70%" }}
              src="https://cdn-icons-png.flaticon.com/512/9321/9321345.png"
              alt="Feature 1" className="img-fluid mt-3"
            />
            <div className="card-content">
              <div>
              <h5 className="mt-3">Reporting Services</h5>
              <p
                className={hoveredCard === 1 ? "visible" : "hidden"}
                style={{ textAlign: "center" }}
              >
                All reporting services under the same bundle
                <br />
                <Link to={"/report"}>
                  <button className="btn mt-2"style={{backgroundColor:"#8a2222", color:"white"}}>View</button>
                </Link>
              </p>
              </div>
              
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="card mb-4 card-wrapper"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              style={{ display: "block", margin: "0 auto", width: "70%"  }}
              src="https://www.freeiconspng.com/thumbs/traffic-symbol-icon-png/traffic-icon-1.png"
              alt="Feature 2"
            />
            <div className="card-content">
              <h5 className="mt-4">Traffic Services</h5>
              <p
                className={hoveredCard === 2 ? "visible" : "hidden"}
                style={{ textAlign: "center" }}
              >
                Everything related to traffic services including fine etc.
                <br />
                <Link to={"/traffic"}>
                  <button className="btn mt-2"style={{backgroundColor:"#8a2222", color:"white"}}>View</button>
                </Link>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card mb-4 card-wrapper"
            style={{ marginRight: "5px" }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              style={{ display: "block", margin: "0 auto", width: "70%" }}
              src={comm}
              alt="Feature 4"
            />
            <div className="card-content">
              <h5 className="mt-4">Community Services</h5>
              <p
                className={hoveredCard === 4 ? "visible" : "hidden"}
                style={{ textAlign: "center" }}
              >
                Use a variety of smart and essential community services
                <br />
                <Link to = {"/community"}>
                <button className="btn mt-2"style={{backgroundColor:"#8a2222", color:"white"}}>View</button>
                </Link>
              </p>
            </div>
          
          </div>
        </div>
      <Link to ={"/allserv"}>
      <button className="btn btn-sm rounded-pill shadow-lg  text-white"style={{backgroundColor:"#357a77",color:"white",marginTop:"20px"}}>View All Services</button>

      </Link>
     
      </div>
      
    </>
  );
}

export default FeatureCard;
