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
                    "url('https://static.vecteezy.com/system/resources/previews/005/585/798/non_2x/abstract-dark-purple-background-overlap-layer-on-dark-space-for-background-design-exclusive-wallpaper-design-for-poster-brochure-presentation-website-etc-vector.jpg')",
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
                    "url('https://static.vecteezy.com/system/resources/previews/005/585/798/non_2x/abstract-dark-purple-background-overlap-layer-on-dark-space-for-background-design-exclusive-wallpaper-design-for-poster-brochure-presentation-website-etc-vector.jpg')",
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
                    "url('https://static.vecteezy.com/system/resources/previews/005/585/798/non_2x/abstract-dark-purple-background-overlap-layer-on-dark-space-for-background-design-exclusive-wallpaper-design-for-poster-brochure-presentation-website-etc-vector.jpg')",
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

      {/* Back to Home Button */}
      <div className="back-to-home text-center mt-5">
        <Link to="/">
          <button
            className="btn"
            style={{ backgroundColor: "#797d43", color: "white" }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TrafficServices;
