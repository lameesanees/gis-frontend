import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SocialSupport() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handlePay = () => {
    // Logic to process payment
    console.log("Payment processed!");
    // Close the modal after payment
    handleClose();
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
              onClick={handleShow} // Open modal when clicked
            >
              Support
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Help the needs!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Charity Fund Type</Form.Label>
              <Form.Control
                as="select"
              >
                <option>Educational Support</option>
                <option>Shelter/Home Support</option>
                <option>Food for Orphans/others Support</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control
                as="select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option>Credit Card</option>
                <option>Wallet</option>
                <option>UPI</option>
                <option>Net Banking</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={handleClose}>
            Close
          </Button>
          <Link to ={'/pay'}>
          <Button className="btn btn-success">
            Pay
          </Button>
          </Link>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SocialSupport;
