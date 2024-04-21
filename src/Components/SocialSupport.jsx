import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function SocialSupport() {
  const [showFinancialModal, setShowFinancialModal] = useState(false);
  const [showHealthModal, setShowHealthModal] = useState(false);
  const [showEmotionalModal, setShowEmotionalModal] = useState(false);

  const handleFinancialClick = () => {
    setShowFinancialModal(true);
  };

  const handleHealthClick = () => {
    setShowHealthModal(true);
  };

  const handleEmotionalClick = () => {
    setShowEmotionalModal(true);
  };

  const handleClose = () => {
    setShowFinancialModal(false);
    setShowHealthModal(false);
    setShowEmotionalModal(false);
  };

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
            <button
              className="btn"
              style={{ backgroundColor: "darkGreen", color: "white" }}
              onClick={() => window.scrollTo(0, window.innerHeight)}
            >
              Support
            </button>
          </div>
        </div>
      </div>

      {/* Support Choices */}
      <div className="container mt-4">
        <h2>Choose the Type of Support:</h2>
        <div className="row">
          <div className="col-md-4 mt-3">
            <button
              style={{ backgroundColor: "#7d0a04", color: "white" }}
              className="btn  btn-lg btn-block mb-3"
              onClick={handleFinancialClick}
            >
              Shelter Support
            </button>
          </div>
          <div className="col-md-4 mt-3">
            <button
              style={{ backgroundColor: "#7d0a04", color: "white" }}
              className="btn btn-lg btn-block mb-3"
              onClick={handleHealthClick}
            >
              Health Support
            </button>
          </div>
          <div className="col-md-4 mt-3">
            <button
              style={{ backgroundColor: "#7d0a04", color: "white" }}
              className="btn btn-lg btn-block mb-3"
              onClick={handleEmotionalClick}
            >
              Educational Support
            </button>
          </div>
        </div>
      </div>

      {/* Financial Support Modal */}
      <Modal show={showFinancialModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Financial Support Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input fields */}
          <div className="mb-3">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" className="form-control" id="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="location">Location:</label>
            <input type="text" className="form-control" id="location" />
          </div>
          {/* Payment Button */}
          <div className="text-center">
            <Link to="/pay">
              <button className="btn btn-success btn-sm mb-3">Pay Now</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>

      {/* Health Support Modal */}
      <Modal show={showHealthModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Health Support Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input fields */}
          <div className="mb-3">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" className="form-control" id="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="location">Location:</label>
            <input type="text" className="form-control" id="location" />
          </div>
          {/* Payment Button */}
          <div className="text-center">
            <Link to="/pay">
              <button className="btn btn-success btn-sm mb-3">Pay Now</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>

      {/* Emotional Support Modal */}
      <Modal show={showEmotionalModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Emotional Support Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input fields */}
          <div className="mb-3">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" className="form-control" id="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="location">Location:</label>
            <input type="text" className="form-control" id="location" />
          </div>
          {/* Payment Button */}
          <div className="text-center">
            <Link to="/pay">
              <button className="btn btn-success btn-sm mb-3">Pay Now</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SocialSupport;
