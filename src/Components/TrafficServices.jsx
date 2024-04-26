import React from "react";
import { Link } from "react-router-dom";
import { TbFileUnknown } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";

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
          {/* Icon 1 */}
          <div className="col-md-4 mb-4">
            <Link to="/unknownacc">
              <button
                className="btn shadow-lg w-100"
                style={{
                  backgroundColor: "#b57957",
                  color: "white",
                  borderRadius: "30px",
                  height: "200px",
                  backgroundImage:
                    "url('https://w0.peakpx.com/wallpaper/972/941/HD-wallpaper-galaxy-colour-colours-explosion-heart-pastel-plain-purple-simple-solid.jpg')",
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
          <div className="col-md-4 mb-4">
            <Link to="/trafficfine">
              <button
                className="btn shadow-lg w-100"
                style={{
                  backgroundColor: "#b57957",
                  color: "white",
                  borderRadius: "30px",
                  height: "200px",
                  backgroundImage:
                    "url('https://w0.peakpx.com/wallpaper/972/941/HD-wallpaper-galaxy-colour-colours-explosion-heart-pastel-plain-purple-simple-solid.jpg')",
                }}
              >
                <MdPayments style={{ fontSize: "80px" }} />
                <br />
                <p className="mt-3" style={{ fontSize: "15px" }}>
                  Traffic Fines
                </p>
              </button>
            </Link>
          </div>

          {/* Icon 3 */}
          <div className="col-md-4 mb-4">
            <Link to="/accident">
              <button
                className="btn shadow-lg w-100"
                style={{
                  backgroundColor: "#b57957",
                  color: "white",
                  borderRadius: "30px",
                  height: "200px",
                  backgroundImage:
                    "url('https://w0.peakpx.com/wallpaper/972/941/HD-wallpaper-galaxy-colour-colours-explosion-heart-pastel-plain-purple-simple-solid.jpg')",
                }}
              >
                <FaCarCrash style={{ fontSize: "80px" }} />
                <br />
                <p className="mt-3" style={{ fontSize: "15px" }}>
                  {" "}
                  Minor/Major Accident
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default TrafficServices;
