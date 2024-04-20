import React from "react";
import { Link } from "react-router-dom";
import { GiPoliceOfficerHead } from "react-icons/gi"; // Import the GiPoliceOfficerHead icon
import { TbFileUnknown } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";
import { FaTrafficLight } from "react-icons/fa";

function TrafficServices() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1 className="mt-5 mb-5 text-center">Traffic Services</h1>
      </header>

      {/* Content */}
      <div className="content">
        <div className="row">
          {/* Big Image on the Left */}
          <div className="column col-md-6">
            <img
              src="https://img.freepik.com/free-vector/people-traveling-by-sharing-transport-using-online-application-business-persons-with-city-map-finding-direction-auto-car-rental-flat-illustration_74855-20675.jpg"
              alt="Big Image"
              className="img-fluid w-100"
            /> <br />
          </div>

          {/* Icons and Links */}
          <div className="column col-md-6">
            <div className="row">
              {/* Icon 1 */}
              <div className="column col-md-4">
                <Link to="/unknownacc">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TbFileUnknown style={{ fontSize: "80px" }} />
 
                    <br />
                    <p className="mt-3" style={{ fontSize: "15px" }}>
                      Unknown Accident Report
                    </p>
                  </button>
                </Link>
              </div>

              {/* Icon 2 */}
              <div className="column col-md-4">
                <Link to="/smartimp">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MdPayments style={{ fontSize: "80px" }} />
 
                    <br />
                    <p className="mt-3" style={{ fontSize: "15px" }}>
                      Smart Impound Payment
                    </p>
                  </button>
                </Link>
              </div>

              {/* Icon 3 */}
              <div className="column col-md-4">
                <Link to="/simpleacc">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaCarCrash style={{ fontSize: "80px" }} />
                    <br />
                    <p className="mt-3" style={{ fontSize: "15px" }}>
                      Simple Accident Report
                    </p>
                  </button>
                </Link>
              </div>

              {/* Icon 4 */}
              <div className="column col-md-4">
                <Link to="/trafficfine">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaTrafficLight style={{ fontSize: "80px" }} />
                    <br />
                    <p className="mt-3" style={{ fontSize: "15px" }}>
                      Traffic Fines Installment
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="back-to-home text-center mt-5">
        <Link to="/">
          <button className="btn"style={{backgroundColor:"#797d43",color:"white"}}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default TrafficServices;
