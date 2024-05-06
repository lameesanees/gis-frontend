import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbReport } from "react-icons/tb";
import { PiEyeSlashFill } from "react-icons/pi";
import { RiPoliceCarFill } from "react-icons/ri";

function Report() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
  })
  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1 className="mt-5 mb-5 text-center">Report Services</h1>
      </header>

      {/* Content */}
     <div>
      {
        isLoggedIn?
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
                    "url('https://w0.peakpx.com/wallpaper/972/941/HD-wallpaper-galaxy-colour-colours-explosion-heart-pastel-plain-purple-simple-solid.jpg')",
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
                    "url('https://w0.peakpx.com/wallpaper/972/941/HD-wallpaper-galaxy-colour-colours-explosion-heart-pastel-plain-purple-simple-solid.jpg')",
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
                    "url('https://w0.peakpx.com/wallpaper/972/941/HD-wallpaper-galaxy-colour-colours-explosion-heart-pastel-plain-purple-simple-solid.jpg')",
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
      :
      <div className="content">
      <div className="row">
        {/* Icon 1 */}
        <div className="col-md-4 mb-4">

          <Link to="/login">
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
          <Link to="/login">
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
          <Link to="/login">
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
      }
     </div>

    </div>
  );
}

export default Report;
