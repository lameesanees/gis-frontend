import React, { useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardOverlay,
} from "mdb-react-ui-kit";
import { FaCarCrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFileArchive } from "react-icons/fa";

function PoliceEye() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <>
      <h2 className="m-3 p-4 text-center">Police Emergency</h2>
      <h4 className="text-center">
        If you witness any violation or emergency, please report it:
      </h4>
      <div className="container">
        <MDBCardGroup className="row row-cols-1 row-cols-md-3 g-4 mt-3 gap-2">
          {/* card 1 */}
          <MDBCard
            className="col"
            style={{ borderRadius: "20px", backgroundColor: "#631e13" }}
          >
            <Link to={"/unknownacc"}>
              <FaCarCrash
                className="mt-1"
                style={{
                  fontSize: "160px",
                  marginLeft: "50px",
                  color: "whitesmoke",
                }}
              />

              <p className="text-center text-white mt-2">
                Unknown Accident Report
              </p>
              <MDBCardOverlay></MDBCardOverlay>
            </Link>
          </MDBCard>

          <MDBCard
            className="col"
            style={{ borderRadius: "20px", backgroundColor: "#631e13" }}
          >
            <Link to="/missing">
              <i
                className="fa-solid fa-person-circle-question mt-3"
                style={{
                  fontSize: "140px",
                  marginLeft: "80px",
                  color: "whitesmoke",
                }}
              ></i>
              <p className="text-center text-white mt-3">Missing Cases</p>
              <MDBCardOverlay></MDBCardOverlay>
            </Link>
          </MDBCard>

          <MDBCard
            className="col"
            style={{ borderRadius: "20px", backgroundColor: "#631e13 " }}
          >
            <Link to="/other">
              <FaFileArchive
                className="mt-3"
                style={{
                  fontSize: "140px",
                  marginLeft: "80px",
                  color: "whitesmoke",
                }}
              />

              <p className="text-center text-white mt-3">Other Information</p>
              <MDBCardOverlay></MDBCardOverlay>
            </Link>
          </MDBCard>
        </MDBCardGroup>
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
    </>
  );
}

export default PoliceEye;
