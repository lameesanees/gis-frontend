import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { Button, Form, ModalFooter } from "react-bootstrap";
function MmForm() {
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({
    fullName: "",
    aadharNumber: "",
    state: "",
    location: "",
    date: "",
    description: "",
    contact: "",
    file: null,
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    handleClose();
  };
  return (
    <>
      <div>
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search By Location"
          className="form-control m-5 mx-auto"
        />
      </div>
      <Card
        style={{ width: "18rem", backgroundColor: "#252b2b", color: "white" }}
        onClick={handleShow}
        className="mx-auto mt-4 shadow-lg"
      >
        <Card.Img
          variant="top"
          src="https://www.gowithalvarez.com/images/imported/1gq_na0qpx_.jpeg"
          className="img-fluid"
          alt="Placeholder"
        />
        <Card.Body>
          <Card.Title style={{ cursor: "pointer" }}>Major Accident</Card.Title>
          <Card.Title style={{ cursor: "pointer" }}>10/01/2023</Card.Title>
        </Card.Body>
        <ModalFooter></ModalFooter>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filled Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
              <Form.Label className="text-center">
                <img
                  src="https://www.gowithalvarez.com/images/imported/1gq_na0qpx_.jpeg"
                  className="img-fluid"
                  style={{ width: "50%" }}
                  alt=""
                />
              </Form.Label>
            </Form.Group>

            <Form.Group className="mt-2" style={{ textAlign: "justify" }}>
              <Form.Label>
                Full Name: <span className="text-danger">Priya George</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Aadhar/License:{" "}
                <span className="text-danger">785412365</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Contact: <span className="text-danger">5621548556</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Number Plate: <span className="text-danger">KL 52 N 8951</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Insurance Company:{" "}
                <span className="text-danger">Reliance</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Accident Type: <span className="text-danger">Major</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Date: <span className="text-danger">10/12/2023</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Opponent Full Name:{" "}
                <span className="text-danger">Paul Mathew</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Opponent Contact:{" "}
                <span className="text-danger">4562122365</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Opponent Aadhar/License:{" "}
                <span className="text-danger">8965232</span>
              </Form.Label>{" "}
              <br />
              <Form.Label>
                Opponent Number Plate:{" "}
                <span className="text-danger">KL 65 M 7854</span>
              </Form.Label>{" "}
              <br />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark">Delete</Button>
          <Button className="btn btn-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MmForm;
