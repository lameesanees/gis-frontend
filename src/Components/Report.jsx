import React from "react";
import { Link } from "react-router-dom";
import { TbReport } from "react-icons/tb";
import { FaBriefcaseMedical } from "react-icons/fa";
import { RiCriminalFill } from "react-icons/ri";
import { PiEyeSlashFill } from "react-icons/pi";
import { RiPoliceCarFill } from "react-icons/ri";
import { GiPoliceOfficerHead } from "react-icons/gi";

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
          {/* Icons and Links */}
          <div className="column col-md-6">
            <div className="row">

              {/* Icon 1 */}
              <div className="column col-md-4">
                <Link to="/policereport">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
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
              {/* <div className="column col-md-4">
                <Link to="/medical">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
                    }}
                  >
                    <FaBriefcaseMedical style={{ fontSize: "80px" }} />
                    <br />
                    <p className="mt-3" style={{ fontSize: "15px" }}>
                      Medical Emergency
                    </p>
                  </button>
                </Link>
              </div> */}

              {/* Icon 3 */}
              <div className="column col-md-4">
                <Link to="/policeye">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
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
              <div className="column col-md-4">
                <Link to="/touristpolice">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
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
              <div className="column col-md-4">
                <Link to="/ecrime">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
                    }}
                  >
                    <RiCriminalFill  style={{ fontSize: "80px" }} />

                    <br />
                    <p className="mt-3" style={{ fontSize: "15px" }}>
                      eCrime Complaint Services
                    </p>
                  </button>
                </Link>
              </div>
              <div className="column col-md-4">
                <Link to="/localpolice">
                  <button
                    className="btn shadow-lg mb-4"
                    style={{
                      backgroundColor: "#b57957",
                      color: "white",
                      borderRadius: "30px",
                      height: "200px",
                      backgroundImage:
                        "url('https://i.pinimg.com/736x/2d/96/a9/2d96a9e420ae6dd9cbdeca0931dad1dd.jpg')",
                    }}
                  >
                    <GiPoliceOfficerHead style={{ fontSize: "80px" }} />

                    <br />
                    <p className="mt-3" style={{ fontSize: "15px" }}>
                      Local Police Services
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Big Image on the Right */}
          <div className="column col-md-6">
            <img
              src="https://thebookkeeper.com/wp-content/uploads/2022/03/report-services-img-1.png"
              alt="Big Image"
              className="img-fluid w-100"
            />
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

export default Report;
