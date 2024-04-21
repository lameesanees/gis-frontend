import React from "react";
import { Link } from "react-router-dom";
import { TbReport } from "react-icons/tb";
import { PiEyeSlashFill } from "react-icons/pi";
import { RiPoliceCarFill } from "react-icons/ri";

function Report() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1 className="mt-5 mb-5 text-center">Report Services</h1>
      </header>

      {/* Content */}
      <div className="content">
        <div className="row">
          {/* Icon 1 */}
          <div className="col-md-4 mb-4">
            <Link to="/policereport">
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
                <TbReport style={{ fontSize: "80px" }} />
                <br />
                <p className="mt-3" style={{ fontSize: "15px" }}>
                  Police Report Enquiry
                </p>
              </button>
            </Link>
          </div>

          {/* Icon 2 */}
          <div className="col-md-4 mb-4">
            <Link to="/policeye">
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
                <PiEyeSlashFill style={{ fontSize: "80px" }} />
                <br />
                <p className="mt-3" style={{ fontSize: "15px" }}>
                  Police Eye Contact
                </p>
              </button>
            </Link>
          </div>

          {/* Icon 3 */}
          <div className="col-md-4 mb-4">
            <Link to="/touristpolice">
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
                <RiPoliceCarFill style={{ fontSize: "80px" }} />
                <br />
                <p className="mt-3" style={{ fontSize: "15px" }}>
                  Tourist Police Services
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

export default Report;
