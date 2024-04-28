import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbFileUnknown } from "react-icons/tb";


function CommunityServices() {
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
    <>
      <div className="container">
        {/* Header */}
        <header>
          <h1 className="mt-5 mb-5 text-center">Community Services</h1>
        </header>

        {/* Content */}
       {
        isLoggedIn?
        <div className="content">
        <div className="row justify-content-center">
          {/* Icon 1 */}
          <div className="col-md-4 mb-4">
            <Link to="/socialsupport">
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
                  Social Support
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      :
      <div className="content">
      <div className="row justify-content-center">
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
              <TbFileUnknown style={{ fontSize: "80px" }} />
              <br />
              <p className="mt-3" style={{ fontSize: "15px" }}>
                Social Support
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
       }
      </div>
    </>
  );
}

export default CommunityServices;
