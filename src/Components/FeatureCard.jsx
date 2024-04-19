import React, { useState } from "react";
import "./featurecard.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
function FeatureCard() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <div className="feature-container mt-5">
        <h4 style={{ color: "#969445" }}>
          <b>What would you like to apply?</b>{" "}
        </h4>
        <div className="card-container">
          {/* Card 1 */}
          <div
            className="card"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              style={{ display: "block", margin: "0 auto", width: "100%" }}
              src="https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Feature 1"
            />
            <div className="card-content">
              <h5 className="mt-4">Reporting Services</h5>
              <p
                className={hoveredCard === 1 ? "visible" : "hidden"}
                style={{ textAlign: "center" }}
              >
                All reporting services under the same bundle
                <br />
                <Link to={"/report"}>
                  <button className="btn btn-dark mt-2">View</button>
                </Link>
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="card"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              style={{ display: "block", margin: "0 auto", width: "100%" }}
              src="https://images.pexels.com/photos/7715189/pexels-photo-7715189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  <button className="btn btn-dark mt-2">View</button>
                </Link>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          {/* <div
            className="card"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              style={{ display: "block", margin: "0 auto", width: "100%" }}
              src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Feature 3"
            />
            <div className="card-content">
              <h5 className="mt-4">Emergency Services</h5>
              <p
                className={hoveredCard === 3 ? "visible" : "hidden"}
                style={{ textAlign: "center" }}
              >
                Access quick response and assistance during emergencies for
                peace of mind. <br />{" "}
                <Link to = {"/emergency"}>
                <button className="btn btn-dark mt-2">View</button>
                </Link>
              </p>
            </div>
          </div> */}

          {/* Card 4 */}
          <div
            className="card"
            style={{ marginRight: "5px" }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              style={{ display: "block", margin: "0 auto", width: "100%" }}
              src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                <button className="btn btn-dark mt-2">View</button>
                </Link>
              </p>
            </div>
          
          </div>
        </div>
      <Link to ={"/allserv"}>
      <button className="btn rounded-pill shadow-lg  text-white mt-3"style={{backgroundColor:"#797d43",color:"white"}}>View All Services</button>

      </Link>
     
      </div>
      
    </>
  );
}

export default FeatureCard;
