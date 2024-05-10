import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function SocialSupport() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const navigate = useNavigate();

  

  return (
    <div>
      {/* Full-screen Image with Overlay */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)",
            zIndex: 1,
          }}
        ></div>
        <img
          src="https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/07/25/Photos/poverty_2--621x414.jpg"
          alt="Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: "2",
            width: "100%",
          }}
        >
          Supporting Your Community
          <h3 className="text-center text-muted">
            Providing Compassionate Assistance Where It's Needed Most,
          </h3>
          <h3 className="text-center text-muted">
            Join Us in Making a Positive Impact on Lives
          </h3>
          <div className="text-center mt-3">
            <Link to ={'/event'}>
            <button
              className="btn"
              style={{ backgroundColor: "darkGreen", color: "white" }}
              onClick={handleShow} // Open modal when clicked
            >
              Support
            </button></Link>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}

export default SocialSupport;
